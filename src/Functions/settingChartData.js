import { convertDate } from "./convertDate";

export const settingChartData =(setChartData,prices)=>{

    setChartData({
        labels:prices.map( (price) => convertDate()),
        datasets: [
          {
            data: prices.map( (price) => price[0]),
            borderColor: "blue",
            tension:0.9,
            fill:true,
            pointRadius:0,
            backgroundColor: "transparent",
          }, 
        ]
      });
}