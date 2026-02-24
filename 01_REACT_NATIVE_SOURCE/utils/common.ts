export const vaildateEmail = (email:string) => {
  const regex = /^/
  return regex.test(email)
}

export const removeWhitespace = (text:string) => {
  const regex = /\s/g
  return text.replace(regex, '')
}