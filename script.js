fetch("data.json")
  .then(response => response.json())
  .then(data => {
    const trace = {
      x: data.labels,
      y: data.values,
      mode: "lines+markers",
      line: { color: "blue" }
    };

    const layout = {
      title: "My Plotly Graph",
      xaxis: { title: "Label" },
      yaxis: { title: "Value" }
    };

    Plotly.newPlot("chart", [trace], layout);
  })
  .catch(err => console.error("Error loading data:", err));
