<template>
    <client-only>
        <el-menu
            :default-active="activeIndex"
            mode="horizontal"
            :ellipsis="false"
            @select="handleSelect"
        >
            <el-menu-item index="0">
                DENKA
            </el-menu-item>
            <el-menu-item index="1">MENU 1</el-menu-item>
            <el-menu-item index="2">MENU 2</el-menu-item>
            <el-menu-item index="3">MENU 3</el-menu-item>
            <el-menu-item h="full">
            <el-switch v-model="isDark">
                <template #active-action>
                    <Icon name="solar:moon-bold" width="24" height="24"/>
                </template>
                <template #inactive-action>
                    <Icon name="solar:sun-bold" width="24" height="24"/>
                </template>
            </el-switch>
            </el-menu-item>
            <el-menu-item index="4">
                <Icon name="octicon:mark-github-16" width="32" height="32" />
            </el-menu-item>
        </el-menu>
    </client-only>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { toggleDark, isDark } from '@/composables/dark'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped>
.el-menu--horizontal > .el-menu-item:nth-child(1) {
  margin-right: auto;
}
</style>