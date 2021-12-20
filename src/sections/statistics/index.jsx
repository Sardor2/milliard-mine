import React from "react";
import "./styles.scss";
import Container from "../../components/container";
import { Doughnut, Line } from "react-chartjs-2";
import { lineOptions, getGradient } from "./line-chart-data";
import { useTranslation } from "react-i18next";

const options = {
  plugins: {
    legend: {
      display: false,
      position: "bottom",
    },
  },
  cutout: "60%",
};

const Statistics = ({ tags = [] }) => {
  const { t } = useTranslation();
  const [currentTag, setCurrentTag] = React.useState(0);
  const total = React.useMemo(
    () =>
      tags?.reduce((acc, curr) => {
        return acc + curr.count;
      }, 0),
    [tags]
  );

  const data = {
    labels: tags?.map((item) => item.tag),
    datasets: [
      {
        label: false,
        data: tags?.map((item) => item.count),
        backgroundColor: tags?.map((item) => item.color),
        borderWidth: 0,
        weight: 0.5,
        // spacing: 10,
        // circumference: 900,
      },
    ],
  };

  const lineData = React.useMemo(() => ({
    labels: tags?.map((item) => item.tag),
    datasets: [
      {
        label: ` ${t("annual_income")}`,
        data: [9, 8, 4, 5, 3.5],
        fill: false,
        backgroundColor: "#544179",
        tension: 0.3,
        borderColor: function (context) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            // This case happens on initial chart load
            return null;
          }
          return getGradient(ctx, chartArea);
        },
        pointBorderWidth: 0,
        pointBackgroundColor: function (context) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            // This case happens on initial chart load
            return null;
          }
          return getGradient(ctx, chartArea);
        },
        pointHoverBorderWidth: 4,
        pointBorderColor: "white",
        pointRadius: 5,
        pointHoverRadius: 15,
        pointStyle: "rectRounded",
      },
    ],
  }));

  return (
    <section id="statistics">
      <Container>
        <div className="top">
          <div className="teaser">
            <h2>Biz qaysi sohalarda faoliyat yuritamiz</h2>

            <div className="tags">
              {tags?.map((item, index) => (
                <span
                  onClick={() => setCurrentTag(index)}
                  className={`tag ${index === currentTag ? "active" : ""}`}
                  key={item.color}
                >
                  #{item.tag}
                </span>
              ))}
            </div>
          </div>

          <div className="pie-container">
            <Doughnut type="doughnut" data={data} options={options} />
            <span className="center-text">
              {tags && ((tags[currentTag]?.count * 100) / total).toFixed(1)}%
            </span>
            <div className="legends">
              {tags?.map((item, index) => (
                <div key={item.color} className="legend">
                  <div className="legend-tag">{item.tag}</div>
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
      <div className="max-w-full overflow-x-auto">
        <div className="bottom-line-graph">
          <div className="grid-lines">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <Line data={lineData} options={lineOptions} />
        </div>
      </div>
    </section>
  );
};

export default Statistics;
