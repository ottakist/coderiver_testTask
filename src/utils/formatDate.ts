export function formatDate(date: Date): string {
  const dayName = new Intl.DateTimeFormat('en-US', {
    weekday: 'long'
  }).format(date)
  const monthName = new Intl.DateTimeFormat('en-US', {
    month: 'long'
  }).format(date)
  const day = date.getDate()

  // Add ordinal suffix
  const ordinal = (n: number): string => {
    if (n > 3 && n < 21) return 'th' // Covers 4-20
    switch (n % 10) {
      case 1:
        return 'st'
      case 2:
        return 'nd'
      case 3:
        return 'rd'
      default:
        return 'th'
    }
  }

  return `${dayName} ${monthName} ${day}${ordinal(day)}`
}
