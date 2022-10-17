export function formatDate(str: string | Date) {
    return new Date(str).toDateString()
}
