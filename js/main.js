// NORMAL DISTRIBUTION GENERATOR (NUMBERS ONLY)
function generateNormalDistribution(mean, stdDev, points) {
    const labels = [];
    const values = [];

    for (let i = 0; i <= points; i++) {
        const x = mean - 3 * stdDev + (6 * stdDev * i) / points;
        const y =
            (1 / (stdDev * Math.sqrt(2 * Math.PI))) *
            Math.exp(-0.5 * Math.pow((x - mean) / stdDev, 2));

        labels.push(x);
        values.push(y);
    }

    return { labels, values };
}

const canvas = document.getElementById("statsChart");

if (canvas) {
    const ctx = canvas.getContext("2d");
    const { labels, values } = generateNormalDistribution(0, 1, 150);

    new Chart(ctx, {
        type: "line",
        data: {
            labels,
            datasets: [{
                label: "Standard Normal Distribution",
                data: values,
                borderColor: "#60a5fa",
                backgroundColor: "rgba(96,165,250,0.25)",
                borderWidth: 3,
                fill: true,
                tension: 0.45,
                pointRadius: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 2000,
                easing: "easeOutQuart"
            },
            plugins: {
                legend: {
                    labels: { color: "#e5e7eb" }
                }
            },
            scales: {
                x: {
                    grid: { color: "rgba(255,255,255,0.06)" },
                    ticks: { color: "#94a3b8" }
                },
                y: {
                    grid: { color: "rgba(255,255,255,0.06)" },
                    ticks: { color: "#94a3b8" }
                }
            }
        }
    });
}

// DEV CONSOLE
console.log("%c📊 Probability & Statistics Portfolio", "color:#60a5fa;font-size:18px;");
