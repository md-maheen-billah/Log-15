const myScore = 65;
const myFriendScore = 35;
if (myScore > 80) {
  if (myFriendScore > 80) {
    console.log("Go for a lunch");
  } else {
    if (myFriendScore < 80 && myFriendScore >= 60) {
      console.log("Good Luck Next time");
    } else {
      if (myFriendScore < 60 && myFriendScore >= 40) {
        console.log("Keep your friend's message unseen");
      } else {
        console.log("Block your friend");
      }
    }
  }
} else {
  console.log("Go to home and sleep and act sad");
}
