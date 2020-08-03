// 用数组模仿骰子
const dice = [1, 2, 3, 4, 5, 6];
//连续两次6的概率 -- 1/42

// 从一个范围内取随机整数
const randomNum = (minNum, maxNum) => {
    return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
};
// 从一个全是数字的数组里随机取一个数字
const getValFromArr = (arr) => {
    return arr[randomNum(0, arr.length - 1)];
};
// 一次掷几个
const roll = (num = 1) => {
    if (!num) {
        return 0;
    }
    if (num === 1) {
        return getValFromArr(dice);
    }
    if (num > 1) {
        let arr = [];
        for (let i = 0; i < num; i++) {
            arr.push(getValFromArr(dice));
        }
        return arr;
    }
};
// 分数转换 getFraction(2, 4) --> 1/2
const getFraction = (numerator, denominator) => {
    Fraction.fraction(numerator, denominator);
    Fraction.toFraction();
    return Fraction.d;
};
let Fraction = {
    a: 0,
    b: 0,
    d: "",
    e: 0,
    fraction: function (num1, num2) {
        Fraction.a = num1;
        Fraction.b = num2;
        Fraction.appointment();
    },
    gcd: function (a, b) {
        //欧几里德算法
        return b === 0 ? a : Fraction.gcd(b, a % b);
    },
    appointment: function () {
        // 约分操作 如果分子是0或分母是1就不用约分了
        if (Fraction.a === 0 || Fraction.b === 1) return;
        Fraction.e = Fraction.gcd(Fraction.a, Fraction.b);
        Fraction.a /= Fraction.e;
        Fraction.b /= Fraction.e;
    },
    toFraction: function () {
        Fraction.d = Fraction.a + "/" + Fraction.b;
    },
};
export { roll, getFraction };
