import { remark } from 'remark'
import html from 'remark-html'

export async function getMarkdownContent() {
    const url = 'https://raw.githubusercontent.com/M1sterNT/M1sterNT/main/README.md' // เปลี่ยน URL ตามต้องการ
    const response = await fetch(url)
    const markdown = await response.text()

    const processedContent = await remark()
        .use(html)
        .process(markdown)
    const contentHtml = processedContent.toString()

    return {
        contentHtml,
    }
}
