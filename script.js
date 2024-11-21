function increaseScore(team){
    const scoreId=`score${team}`;
    console.log(scoreId)
    const scoreElement= document.getElementById(scoreId);
    console.log(scoreElement)
    let score=Number(scoreElement.textContent);
    console.log(score)
    scoreElement.textContent= ++score;


}
function decreaseScore(team){
    const scoreId=`score${team}`;
    const scoreElement= document.getElementById(scoreId);
    let score=Number(scoreElement.textContent);
    if(score >0){
        scoreElement.textContent=--score
    }
    else{
        alert("Skor Sıfırdan Küçük Olamaz!")
    }


}
function resetScore(team){
    const resetId=`score${team}`;
    const resetElement= document.getElementById(resetId);
    resetElement.textContent=0
}
function setScorePrompt(team){
    const setId=`score${team}`;
    const setElement= document.getElementById(setId);
    const scoreInput=prompt("Yeni Gol Sayısı:");
    console.log(typeof scoreInput)
    if(scoreInput>=0){
        setElement.textContent=scoreInput
    }
    else{
        alert("Lütfen bir sayı giriniz")
    }

    
}
function setTeamNameprompt(team){
    const setName=`name${team}`;
    const setNameElement=document.getElementById(setName);
    const nameInput=prompt("Lütfen bir takım ismi giriniz");
    if(nameInput.trim()!==""){
        setNameElement.textContent=nameInput;

    }else{
        alert("geçerli bir isim giriniz.")
    }
}
