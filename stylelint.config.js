export default {
  extends: [
    'stylelint-config-standard', // 官方推荐的标准规则
    'stylelint-config-recess-order', // 自动对 CSS 属性进行排序，保持代码整洁
  ],
  rules: {
    // 允许空的 CSS 文件
    'no-empty-source': null,
    // 关闭强制类名使用 kebab-case (连字符) 的限制，因为在 React 中经常使用 camelCase (驼峰) 或 BEM
    'selector-class-pattern': null,
    // 允许未知的伪类 (比如 :global 等 CSS Modules 语法)
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'local'],
      },
    ],
  },
}
