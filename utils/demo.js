
const chart = require('@wangnene2/chart')
const { bar, scatter, bg, fg } = chart;

const EDemo = {
    SCATTER: 1,
    BAR: 2,
}

class Demo {
    // A class for showing off demos
    chartDemo(eChartDemo = EDemo.SCATTER) {

        switch (eChartDemo) {
            case EDemo.SCATTER:
                this.scatterDemo();
                break;
            case EDemo.BAR:
                this.barDemo();
                break;
        }

    }

    scatterDemo() {


        // Scatter
        const scatterData = []

        for (let i = 1; i < 17; i++) {
            i < 6 ? scatterData.push({ key: 'A', value: [i, i], style: fg('red', '*') })
                : scatterData.push({ key: 'A', value: [i, 6], style: fg('red', '*') })
        }

        scatterData.push({ key: 'B', value: [2, 6], style: fg('blue', '# '), sides: [2, 2] })
        scatterData.push({ key: 'C', value: [6, 9], style: bg('cyan', 2) })

        console.log(scatter(scatterData, { legendGap: 18, width: 15 }) + '\n')
    }

    barDemo(){
        const barData = [
            { key: 'A', value: 5, style: '*' },
            { key: 'B', value: 3, style: '+' },
            { key: 'C', value: 11 },
            { key: 'D', value: 1, style: bg('red') },
            { key: 'E', value: 5, style: bg('green') },
            { key: 'F', value: 7, style: bg('blue'), padding: 10 },
            { key: 'G', value: 0, style: bg('yellow') }
          ]
          
          console.log(bar(barData))
    }

}


module.exports = { Demo, EDemo };

