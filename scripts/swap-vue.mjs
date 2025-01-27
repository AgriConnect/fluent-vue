import { readFileSync, writeFileSync } from 'fs'
import { execa } from 'execa'

const vue3packages = {
  'vue': 'npm:vue@^3.2.41',
  '@vue/compiler-sfc': '^3.2.41',
  '@vue/test-utils': '^2.1.0'
}

const vue2packages = {
  'vue': 'npm:vue@^2.7.13',
  'vue-template-compiler': '^2.7.13',
  '@vue/test-utils': '^1.3.0',
  '@vue/composition-api': '^1.7.0'
}

const packageFile = './package.json'
const packageFileData = readFileSync(packageFile).toString()
const packageData = JSON.parse(packageFileData)

async function switchPackages (fromPackages, toPackages) {
  Object.keys(fromPackages).forEach((key) => delete packageData.devDependencies[key])
  Object.assign(packageData.devDependencies, toPackages)

  const packageString = JSON.stringify(packageData, null, 2)
  writeFileSync(packageFile, packageString + '\n')

  await execa('pnpm', ['i', '--no-frozen-lockfile'], { stdio: 'inherit' })
  await execa('pnpm', ['vue-demi-fix'], { stdio: 'inherit' })

  console.log(`Switched from vue ${fromPackages.vue} to ${toPackages.vue}`)
}

async function useVueVersion (version) {
  if (version === 3 && packageData.devDependencies.vue !== vue3packages.vue) {
    await switchPackages(vue2packages, vue3packages)
  } else if (version === 2 && packageData.devDependencies.vue !== vue2packages.vue) {
    await switchPackages(vue3packages, vue2packages)
  } else {
    console.log(`Vue ${version} is already in use`)
  }
}

const version = Number(process.argv[2]) || 3

useVueVersion(version)
