import React from "react";
import { roll, getFraction } from "./utils";

class ManyByOne extends React.Component {
    constructor() {
        super();
        this.state = {
            result: [],
            count: 0,
            // 一次扔几个骰子
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
        const { result, count, step } = this.state;
        const val = roll(step);
        let newCount = count;
        const next = [val, ...result];
        if (result.length) {
            // 每个都是6
            let flag = val.every((item) => item === 6);
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
            <div className="ManyByOne  wrap">
                <div onClick={this.start}>start</div>
                <div onClick={this.stop}>stop</div>
                <div>共掷{result.length}次骰子</div>
                <div>
                    {step}个骰子都是6的次数{count}
                </div>
                <div>
                    <div
                        style={{
                            width: "50%",
                            float: "left",
                            textAlign: "right",
                        }}
                    >
                        {step}个骰子都是6的概率
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
                                [
                                {item.map((Jitem,Jindex) => {
                                    return <span key={Jindex}>{Jitem}</span>;
                                })}
                                ]
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default ManyByOne;
