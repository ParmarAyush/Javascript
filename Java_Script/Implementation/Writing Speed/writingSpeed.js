        let random, startTime, endTime, text,btn;
        question = document.getElementById("text");
        myWord = document.getElementById("Write");
        btn = document.getElementById("btn");
        let wordDic = ["Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            "Exercitationem, adipisci asperiores maiores officiis odio harum nemo. Alias, ducimus.",
            "molestiae asperiores nostrum commodi iste delectus itaque, quae doloribus?",
            "Tenetur vero autem reprehenderit! Velit, consectetur! Alias impedit repellat eveniet.",
            "Assumenda mollitia dicta temporibus perferendis vitae cumque pariatur quis recusandae.",
            "At fugit doloremque ex recusandae accusamus necessitatibus amet tempore nostrum!",
            "Saepe quas, animi id reiciendis voluptatem sint! Corporis, facere voluptatibus.",
            "Dolores dolorum soluta facilis nostrum veritatis maiores libero magnam corrupti!"];

        addEventListener("DOMContentLoaded", function () {
            console.log(btn.value == "Start");
        })
        const wordCounter = (str) =>{
            let response = str.split(" ").length;
            console.log("Total Word Written :" + response);
            return response;
        }
        const comparWords = (str1, str2) =>
        {
            let words1 = str1.split(" ");
            let words2 = str2.split(" ");
            let cnt = 0;

            words1.forEach(function (item, index) {
                if (item == words2[index]) {
                    cnt++;
                }
            });

            let errorWords = (words1.length - cnt);
            return (`${cnt} Correct out Of ${words1.length} words and the total number of wrong words ${errorWords}.`)
        }
        const playGame = () => {
            random = Math.floor(Math.random() * wordDic.length)
            console.log(random);
            question.innerHTML = wordDic[random];
            const date = new Date();
            startTime = date.getTime();
            console.log("Start Time : " + startTime);
            btn.value = "Done";
        }
        const endPlay = () => {
            const date = new Date();
            endTime = date.getTime();
            console.log("End Time : " + endTime);
            let totalTime = (( endTime - startTime) / 1000);
            console.log("Total Time " + totalTime);

            let totalString = myWord.value;
            let WordCount = wordCounter(totalString);

            let speed = Math.round((WordCount / totalTime) * 60);
            let finalMsg = `Typed ${WordCount} Word. Your speed is ${speed} per minitues. `;
            finalMsg += comparWords(question.innerHTML, totalString);
            question.innerHTML = finalMsg;
        
        }

        btn.addEventListener("click", function(){
            if(this.value == "Start"){
                myWord.disabled = false;
                playGame();
            }else if(this.value == "Done")
            {
                myWord.disabled = true;
                btn.value = "Start";
                endPlay();
            }
        })
