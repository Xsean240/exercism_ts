export function age(planet: string, seconds: number): number {
  //throw new Error('Remove this line and implement the function')
  switch(planet) {
    case 'mercury':
      return Number((seconds / 31557600 / 0.2408467).toFixed(2))
    case 'venus':
      return Number((seconds / 31557600 / 0.61519726).toFixed(2))
    case 'earth':
      return Number((seconds / 31557600).toFixed(2))
    case 'mars':
      return Number((seconds / 31557600 / 1.8808158).toFixed(2))
    case 'jupiter':
      return Number((seconds / 31557600 / 11.862615).toFixed(2))
    case 'saturn':
      return Number((seconds / 31557600 / 29.447498).toFixed(2))
    case 'uranus':
      return Number((seconds / 31557600 / 84.016846).toFixed(2))
    case 'neptune':
      return Number((seconds / 31557600 / 164.79132).toFixed(2))
    default:
      throw new Error('根本没有这种星球！')
  }
}
