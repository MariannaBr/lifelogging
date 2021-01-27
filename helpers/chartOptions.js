export default function chartOptions(categoryColor) {
    
    let chartColor = ""
    if (categoryColor === "yellow") {
        chartColor = "#FCD34D"
    } else if (categoryColor === "red") {
        chartColor = "#FCA5A5"
    } else if (categoryColor === "pink") {
        chartColor = "#F9A8D4"
    } else if (categoryColor === "purple") {
        chartColor = "#C4B5FD"
    } else if (categoryColor === "indigo") {
        chartColor = "#A5B4FC"
    } else if (categoryColor === "blue") {
        chartColor = "#93C5FD"
    } else if (categoryColor === "green") {
        chartColor = "#6EE7B7"
    } else if (categoryColor === "gray") {
        chartColor = "#D1D5DB"
    }
    
    const options = {
        chart: {
            toolbar: {
                show: false
            },
            foreColor: "#5AFFE9",
            background: "#111827",
            animations: {
                enabled: false,
                animatedGradually: {
                    enabled: false
                },
                dynamicAnimation: {
                    enabled: false
                }
            }
        },
        legend: {
            show: false
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            labels: {
                rotate: -90,
                hideOverlappingLabels: true,
                minHeight: 0
            },
            tickAmount: 7,
            axisBorder: {
                offsetY: 7
            }
        },
        yaxis: {
            labels: {
                minWidth: 100,
                style: {
                    colors: [chartColor],
                    fontSize: "14px"
                }
            }
        },
        plotOptions: {
            heatmap: {
                radius: 0,
                enableShades: false,
                useFillColorAsStroke: true,
                colorScale: {
                    ranges: [{
                        from: 0,
                        to: 0,
                        color: "#111827"
                    }, {
                        from: 1,
                        to: 2,
                        color: chartColor
                    }]
                }
            }
        }
    }
    return options
}