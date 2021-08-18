
function reverse(codedMsg)
{
  let cipherTxt = codedMsg.join('').split(' ')
  let plainTxt = []

  for(let i = cipherTxt.length - 1; i >= 0; i--)
  {
      plainTxt.push(cipherTxt[i])
  }

   return plainTxt.join(" ")
}
