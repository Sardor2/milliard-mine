import React from "react";
import "./styles.scss";
import Container from "../../components/container";
import { Doughnut, Line } from "react-chartjs-2";
import { lineOptions, linedata } from "./line-chart-data";

const options = {
  plugins: {
    legend: {
      display: false,
      position: "bottom",
    },
  },
  cutout: "60%",
};

const Statistics = ({ tags }) => {
  const [currentTag, setCurrentTag] = React.useState(0);
  const total = React.useMemo(
    () =>
      tags.reduce((acc, curr) => {
        return acc + curr.count;
      }, 0),
    [tags]
  );

  const data = {
    labels: tags.map((item) => item.tag),
    datasets: [
      {
        label: false,
        data: tags.map((item) => item.count),
        backgroundColor: tags.map((item) => item.color),
        // borderColor: [
        //   "rgba(255, 99, 132, 1)",
        //   "rgba(54, 162, 235, 1)",
        //   "rgba(255, 206, 86, 1)",
        //   "rgba(75, 192, 192, 1)",
        //   "rgba(153, 102, 255, 1)",
        //   "rgba(255, 159, 64, 1)",
        // ],
        borderWidth: 0,
        weight: 0.5,
        // spacing: 10,
        // circumference: 900,
      },
    ],
  };
  return (
    <section id="statistics">
      <Container>
        <div className="top">
          <div className="teaser">
            <h2>Biz qaysi sohalarda faoliyat yuritamiz</h2>

            <div className="tags">
              {tags.map((item, index) => (
                <span
                  onClick={() => setCurrentTag(index)}
                  className={`tag ${index === currentTag ? "active" : ""}`}
                >
                  #{item.tag}
                </span>
              ))}
            </div>
          </div>

          <div className="pie-container">
            <Doughnut type="doughnut" data={data} options={options} />
            <span className="center-text">
              {((tags[currentTag]?.count * 100) / total).toFixed(2)}%
            </span>
            <div className="legends">
              {tags.map((item, index) => (
                <div className="legend">
                  <h5>{item.tag}</h5>
                  <span>{item.count}</span>
                  <div
                    style={{ backgroundColor: item.color }}
                    className="dot"
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      <div className="bottom-line-graph">
        <Line data={linedata} options={lineOptions} />
      </div>
    </section>
  );
};

export default Statistics;
