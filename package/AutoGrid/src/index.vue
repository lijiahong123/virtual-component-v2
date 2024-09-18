<script>
import { Row, Col, } from 'element-ui'
export default {
    name: 'AutoGrid',
    components: {
        'el-col': Col,
        'el-row': Row,
    },
    props: {
        xs: {
            type: Number,
            default: 24
        },
        sm: {
            type: Number,
            default: 12
        },
        md: {
            type: Number,
            default: 8
        },
        lg: {
            type: Number,
            default: 6
        },
        xl: {
            type: Number,
            default: 4
        },
        gutter: {
            type: Number,
            default: 20
        }
    },
    methods: {
        createTargetChildVNode(h) {
            const { xs, sm, md, lg, xl } = this.$props;
            const tag = 'el-col';
            const props = { xs, sm, md, lg, xl };
            return this.$slots.default.map((VN, idx) => {
                const style = { paddingTop: '5px', paddingBottom: '5px' };
                if (!VN.tag) return VN;
                if (!VN.data) {
                    VN.data = {};
                }
                VN.data.staticStyle = {
                    ...(VN.data.staticStyle || {}),
                    width: '100%'
                };
                // 日期时间选择框样式与其他样式不一样
                // if (VN.tag.endsWith('ElDatePicker')) {
                //     style.paddingTop = '10px';
                //     style.paddingBottom = 0;
                // }
                return h(
                    tag,
                    {
                        props,
                        style,
                        key: idx
                    },
                    [VN]
                );
            });
        }
    },
    render(h) {
        const { gutter } = this.$props;
        const children = [
            h(
                'el-row',
                {
                    props: {
                        gutter
                    }
                },
                this.createTargetChildVNode(h)
            )
        ];
        if (this.$slots.footer) {
            children.push(...this.$slots.footer);
        }
        return h('div', { style: { paddingBottom: '10px' } }, children);
    }
};
</script>