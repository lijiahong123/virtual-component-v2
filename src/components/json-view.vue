<template>
    <div>
        <h2>json-view-v2示例</h2>
        <div id="container">
            <div class="layout">
                <div>
                    <div class="setting">
                        <ul>
                            <li>
                                <label>主题</label>
                                <select v-model="theme">
                                    <option value="">默认</option>
                                    <option value="one-dark">one-dark</option>
                                    <option value="vs-code">vs-code</option>
                                </select>
                            </li>
                            <li>
                                <label>折叠全部</label>
                                <select v-model="closed">
                                    <option :value="false">false</option>
                                    <option :value="true">true</option>
                                </select>
                            </li>

                            <li>
                                <label>deep</label>
                                <select v-model="deep">
                                    <option v-for="item in 10" :value="item">{{ item }}</option>
                                </select>
                            </li>
                            <li>
                                <label>font-size</label>
                                <select v-model="fontSize">
                                    <option v-for="item in 10" :value="item + 11">{{ item + 11 }}</option>
                                </select>
                            </li>
                            <li>
                                <label>icon-style</label>
                                <select v-model="iconStyle">
                                    <option value="square">square</option>
                                    <option value="circle">circle</option>
                                    <option value="triangle">triangle</option>
                                </select>
                            </li>
                            <li>
                                <label>icon-color</label>
                                <input type="color" v-model="color1">
                                <input type="color" v-model="color2">
                            </li>

                            <li>
                                <label for="line-height">line-height</label>
                                <select v-model="lineHeight">
                                    <option v-for="item in 20" :value="item * 2 + 14">{{ item * 2 + 14 }}</option>
                                </select>
                            </li>

                        </ul>
                    </div>
                </div>
                <div class="content">
                    <json-view-v2 :data="json" :theme="theme" :deep="deep" :iconStyle="iconStyle" :fontSize="fontSize"
                        :lineHeight="lineHeight" :closed="closed" :iconColor="iconColor" :stringAutoJson="true" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import json from '../../mock/test.json';
export default {
    name: 'json-view',
    data() {
        return {
            json,
            theme: '',
            fontSize: 14,
            lineHeight: 24,
            deep: 9,
            closed: false,
            iconStyle: 'square',
            closed: false,
            color1: '',
            color2: ''
        }
    },
    computed: {
        iconColor() {
            const { color1, color2 } = this;

            if (color1 && color2) {
                return [color1, color2];
            } else {
                return [];
            }
        }
    }
}
</script>

<style scoped lang="scss">
#container {
    flex: 1;
    width: 100%;

    .layout {
        margin-left: 10px;
        margin-top: 10px;

        h1 {
            font-size: 26px;
            font-weight: 400;
            margin: 12px 0;
        }

        a {
            display: block;
            background-color: #f8f8f9;
            border-radius: 4px;
            padding: 8px 16px;
            border: 1px solid #edeff0;
            border-radius: 4px;
            margin-bottom: 20px;
            text-decoration: none;
            color: #2d8cf0;
        }

        .setting {
            border: 1px solid #ccc;
            padding: 10px 20px;

            h3 {
                line-height: 1.6;
                font-size: 18px;
                color: #333;
            }
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-wrap: wrap;
            align-content: center;

            li {
                display: flex;
                align-items: center;
                padding: 10px 0;
                padding-right: 20px;

                label {
                    font-size: 13px;
                    padding-right: 10px;
                    color: #333;
                }

                select {
                    display: block;
                    width: 80px;
                    height: 28px;
                    background: #fff;
                }
            }
        }

        .content {
            height: 50vh;
            overflow: auto;
            border: 1px solid #ccc;
            border-top: none;
        }
    }
}
</style>
