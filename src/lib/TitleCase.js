export default function TitleCase(string) {
    return string.trim().replace(/\w\S*/g, (a) => a.replace(/^\w/, (b) => b.toUpperCase()))
}
