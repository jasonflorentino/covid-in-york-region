const chartOptions = {
  elements: {
    point: {
      radius: 3,
      hitRadius: 6,
      borderWidth: 3,
      hoverBorderWidth: 3,
      hoverRadius: 5
    }
  },
  tooltips: {
    titleMarginBottom: 14,
    caretPadding: 10,
    titleFontSize: 16,
    bodyFontSize: 14,
  },
  scales: {
    y: {
      beginAtZero: true
    }
  }
}

export default chartOptions;