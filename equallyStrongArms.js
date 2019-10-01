function equallyStrongArms(yourLeft, yourRight, friendsLeft, friendsRight) {
  const yourWeakest = yourLeft <= yourRight ? yourLeft : yourRight;
  const yourStrongest = yourLeft >= yourRight ? yourLeft : yourRight;
  const friendsWeakest = friendsLeft >= friendsRight ? friendsRight : friendsLeft;
  const friendsStrongest = friendsLeft >= friendsRight ? friendsLeft : friendsRight;

  return (yourStrongest === friendsStrongest && yourWeakest === friendsWeakest)

}


console.log(equallyStrongArms(12,16,16,12));