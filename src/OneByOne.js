import React from "react";
import { roll, getFraction } from "./utils";

class OneByOne extends React.Component {
    constructor() {
        super();
        this.state = {
            result: [],
            count: 0,
            step: 2,
        };
        this.timer = null;
    }

    start = () => {
        this.timer = setInterval(() => {
            this.run();
        });
    };
    run = () => {
        const val = roll();
        const { result, count, step } = this.state;
        let newCount = count;
        const next = [val, ...result];
        if (result.length) {
            let arr = next.slice(0, step);
            // 连续两次都是6
            let flag = arr.every((item) => item === 6);
            if (flag) newCount++;
        }
        this.setState({
            result: next,
            count: newCount,
        });
    };
    stop = () => {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    };
    componentWillUnmount() {
        this.stop();
    }

    render() {
        const { result, count, step } = this.state;
        return (
            <div className="OneByOne wrap">
                <div onClick={this.start}>start</div>
                <div onClick={this.stop}>stop</div>
                <div>共掷{result.length}次骰子</div>
                <div>
                    连续{step}次6的次数{count}
                </div>
                <div>
                    <div
                        style={{
                            width: "50%",
                            float: "left",
                            textAlign: "right",
                        }}
                    >
                        连续{step}次6的概率
                    </div>
                    <div
                        style={{
                            width: "50%",
                            float: "right",
                            textAlign: "left",
                        }}
                    >
                        {getFraction(count, result.length)}
                    </div>
                </div>
                <ul>
                    {result.reverse().map((item, index) => {
                        return (
                            <li className="item" key={index}>
                                {item}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default OneByOne;
