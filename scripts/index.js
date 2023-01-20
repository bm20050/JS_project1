// 주사위 번호선택
const showDice = () => {
    const n = Math.floor(Math.random() * 6) + 1;
    const s1 = document.querySelector("#s1");

    s1.innerHTML = `<img src="./images/${n}.png">`;
    console.log(n);
    return n;
}

//요소 보이기 함수
const show = (dspS1, dspS2, dspS3, dspBt1, dspBt2) => {
    const s1 = document.querySelector("#s1");
    const s2 = document.querySelector("#s2");
    const s3 = document.querySelector("#s3");
    const bt1 = document.querySelector("#bt1");
    const bt2 = document.querySelector("#bt2");

    s1.style.display = dspS1;
    s2.style.display = dspS2;
    s3.style.display = dspS3;
    bt1.style.display = dspBt1;
    bt2.style.display = dspBt2;
}

const domUpdate = () => {
    const s3 = document.querySelector("#s3")
    const bt1 = document.querySelector("#bt1");
    const bt2 = document.querySelector("#bt2");
    let num;
    
    bt1.addEventListener("click", () => {
        num = showDice();
        document.querySelector("form").reset();
        show("none", "block", "none", "none", "block");
    });

    //주사위 번호 결과 확인 
    bt2.addEventListener("click", () => {
        // const radios = document.querySelectorAll("input[type=radio]");
        
        // //사용자가 선택한 숫자
        // let usern;
        // for (let r of radios) {
        //     if (r.checked) {
        //         usern = r.value;
        //         break;
        //         //console.log(r);
        //     }
        // }
        // console.log(usern);

        const radios = document.getElementsByName("num");
        const selected = Array.from(radios).find(radio => radio.checked);
        console.log(selected.value);
        // 숫자로 이루어진 문자열을 숫자로 변환 if(num === parseInt(selected).value){}
        if (num == selected.value) {
            s3.innerHTML = `<img src = "./images/o.png">`;
        }
        else {
            s3.innerHTML = `<img src = "./images/x.png">`;
        }

        show("block", "none", "block", "block", "none");
    });
}
//DOM 로드가 된 후 
document.addEventListener("DOMContentLoaded", () => {
    show("none", "none", "none", "block", "none");
    domUpdate();
});
