// ============================================================
// KPI DATA
// ============================================================
const kpiData = {
  en: {
    revenue: { value: 1285400, change: 14.8, prefix: '$' },
    orders: { value: 18520, change: 4.1 },
    aov: { value: 69, change: 4.1, prefix: '$' },
    products: { value: 1540, change: 6.7 }
  },
  zh: {
    revenue: { value: 1285400, change: 14.8, prefix: '¥' },
    orders: { value: 18520, change: 4.1 },
    aov: { value: 69, change: 4.1, prefix: '¥' },
    products: { value: 1540, change: 6.7 }
  }
};

// ============================================================
// TREND DATA (12 months)
// ============================================================
const trendData = {
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  monthsZh: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
  revenue: [820000, 890000, 950000, 1020000, 980000, 1150000, 1280000, 1350000, 1420000, 1580000, 1650000, 1780000],
  orders: [820, 860, 920, 980, 940, 1100, 1220, 1280, 1350, 1450, 1520, 1600]
};

// ============================================================
// CATEGORY DATA
// ============================================================
const categoryData = {
  en: [
    { name: 'Electronics', value: 45 },
    { name: 'Clothing', value: 30 },
    { name: 'Books', value: 15 },
    { name: 'Home & Living', value: 10 }
  ],
  zh: [
    { name: '电子产品', value: 45 },
    { name: '服装', value: 30 },
    { name: '图书', value: 15 },
    { name: '家居生活', value: 10 }
  ]
};

// ============================================================
// PRODUCTS DATA (Top 10)
// ============================================================
const productsData = {
  en: [
    { rank: 1, name: 'Echo Earbuds', sales: 1234, revenue: 83400, growth: 8.5 },
    { rank: 2, name: 'Smart Watch Pro', sales: 1098, revenue: 76500, growth: 12.3 },
    { rank: 3, name: 'Laptop Stand', sales: 987, revenue: 45600, growth: 6.7 },
    { rank: 4, name: 'Wireless Keyboard', sales: 876, revenue: 38900, growth: -2.1 },
    { rank: 5, name: 'USB-C Hub', sales: 765, revenue: 34200, growth: 15.4 },
    { rank: 6, name: 'Monitor 4K', sales: 654, revenue: 29800, growth: 9.8 },
    { rank: 7, name: 'Mechanical Mouse', sales: 543, revenue: 24500, growth: 4.2 },
    { rank: 8, name: 'Desk Mat', sales: 432, revenue: 19800, growth: 22.1 },
    { rank: 9, name: 'Webcam HD', sales: 321, revenue: 15600, growth: -5.6 },
    { rank: 10, name: 'Phone Grip', sales: 210, revenue: 12300, growth: 11.2 }
  ],
  zh: [
    { rank: 1, name: '回声耳机', sales: 1234, revenue: 83400, growth: 8.5 },
    { rank: 2, name: '智能手表 Pro', sales: 1098, revenue: 76500, growth: 12.3 },
    { rank: 3, name: '笔记本支架', sales: 987, revenue: 45600, growth: 6.7 },
    { rank: 4, name: '无线键盘', sales: 876, revenue: 38900, growth: -2.1 },
    { rank: 5, name: 'USB-C 扩展坞', sales: 765, revenue: 34200, growth: 15.4 },
    { rank: 6, name: '4K 显示器', sales: 654, revenue: 29800, growth: 9.8 },
    { rank: 7, name: '机械鼠标', sales: 543, revenue: 24500, growth: 4.2 },
    { rank: 8, name: '桌面垫', sales: 432, revenue: 19800, growth: 22.1 },
    { rank: 9, name: '高清摄像头', sales: 321, revenue: 15600, growth: -5.6 },
    { rank: 10, name: '手机支架', sales: 210, revenue: 12300, growth: 11.2 }
  ]
};

// ============================================================
// INSIGHTS DATA
// ============================================================
const insightsData = {
  en: [
    { metric: '4.8%', label: 'Conversion Rate', status: 'positive', detail: 'Above target for the 3rd straight month', progress: 78 },
    { metric: '72%', label: 'Repeat Purchase', status: 'positive', detail: 'Momentum holding strong', progress: 72 },
    { metric: '6.5x', label: 'Inventory Turnover', status: 'neutral', detail: 'Optimized stocking across top categories', progress: 85 }
  ],
  zh: [
    { metric: '4.8%', label: '转化率', status: 'positive', detail: '连续第三个月高于目标', progress: 78 },
    { metric: '72%', label: '复购率', status: 'positive', detail: '势头保持强劲', progress: 72 },
    { metric: '6.5x', label: '库存周转率', status: 'neutral', detail: '优化了各品类库存', progress: 85 }
  ]
};

// ============================================================
// TRANSLATIONS
// ============================================================
const translations = {
  en: {
    appName: 'Aperture · 光瞳',
    subtitle: 'Data Dashboard',
    kpi: {
      revenue: 'Total Revenue',
      orders: 'Total Orders',
      aov: 'Avg. Order Value',
      products: 'Active Products'
    },
    charts: {
      trend: '12-Month Revenue & Orders Trend',
      category: 'Category Share Breakdown',
      products: 'Top 10 Products by Growth'
    },
    table: {
      rank: '#',
      product: 'Product Name',
      sales: 'Sales',
      revenue: 'Revenue',
      growth: 'Growth'
    },
    insights: 'Strategic Insights'
  },
  zh: {
    appName: 'Aperture · 光瞳',
    subtitle: '数据看板',
    kpi: {
      revenue: '总营收',
      orders: '总订单数',
      aov: '客单价',
      products: '活跃产品'
    },
    charts: {
      trend: '12个月营收与订单趋势',
      category: '品类占比',
      products: '增长最快 Top 10 产品'
    },
    table: {
      rank: '排名',
      product: '产品名称',
      sales: '销量',
      revenue: '营收',
      growth: '增长率'
    },
    insights: '战略洞察'
  }
};

let currentLocale = 'en';

const localeText = (node, value) => {
  if (!node || !value) return;
  node.textContent = value[currentLocale] ?? value.en;
};

const formatNumber = (value) => {
  if (typeof value !== 'number') return value;
  return value.toLocaleString(currentLocale === 'zh' ? 'zh-CN' : 'en-US', {
    maximumFractionDigits: 0
  });
};

const formatCurrency = (value, prefix = '') => {
  if (typeof value !== 'number') return value;
  return `${prefix}${formatNumber(value)}`;
};

function renderHero() {
  const translation = translations[currentLocale];
  document.getElementById('hero-title').textContent = translation.appName;
  document.getElementById('hero-subtitle').textContent = translation.subtitle;
}

function renderMetrics() {
  const metrics = kpiData[currentLocale];
  const translation = translations[currentLocale].kpi;
  const metricGrid = document.getElementById('metric-grid');
  metricGrid.innerHTML = '';

  ['revenue', 'orders', 'aov', 'products'].forEach((key) => {
    const metric = metrics[key];
    const label = translation[key] || key;
    const value = metric.prefix ? formatCurrency(metric.value, metric.prefix) : formatNumber(metric.value);
    const delta = metric.change >= 0 ? `▲ ${metric.change}%` : `▼ ${Math.abs(metric.change)}%`;

    const card = document.createElement('article');
    card.className = 'metric-card';
    card.innerHTML = `
      <strong>${value}</strong>
      <span>${label}</span>
      <div class="metric-delta">${delta}</div>
    `;
    metricGrid.appendChild(card);
  });
}

function renderTopProductsTable() {
  const tbody = document.getElementById('product-rows');
  tbody.innerHTML = '';
  const products = productsData[currentLocale];
  const tableLabels = translations[currentLocale].table;

  localeText(document.getElementById('product-header'), { en: tableLabels.product, zh: tableLabels.product });
  localeText(document.getElementById('category-header'), { en: tableLabels.sales, zh: tableLabels.sales });
  localeText(document.getElementById('revenue-header'), { en: tableLabels.revenue, zh: tableLabels.revenue });
  localeText(document.getElementById('growth-header'), { en: tableLabels.growth, zh: tableLabels.growth });

  products.forEach((item) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${item.rank}</td>
      <td>${item.name}</td>
      <td>${formatNumber(item.sales)}</td>
      <td>${formatCurrency(item.revenue, currentLocale === 'zh' ? '¥' : '$')}</td>
      <td><span class="growth-chip ${item.growth >= 0 ? 'positive' : 'negative'}">${item.growth >= 0 ? '+' : ''}${item.growth}%</span></td>
    `;
    tbody.appendChild(tr);
  });
}

function renderHighlights() {
  const container = document.getElementById('highlight-grid');
  container.innerHTML = '';
  const highlights = insightsData[currentLocale];

  highlights.forEach((item) => {
    const statusText = item.status === 'positive' ? (currentLocale === 'zh' ? '积极' : 'Positive') : (currentLocale === 'zh' ? '中性' : 'Neutral');
    const card = document.createElement('article');
    card.className = 'highlight-card';
    card.innerHTML = `
      <div class="highlight-card-head">
        <strong>${item.label}</strong>
        <span class="highlight-status ${item.status}">${statusText}</span>
      </div>
      <div class="highlight-value">${item.metric}</div>
      <p>${item.detail}</p>
      <div class="progress-row">
        <span class="progress-label">${item.progress}%</span>
        <div class="progress-track">
          <div class="progress-fill" style="width: ${item.progress}%"></div>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function renderChartTitles() {
  const charts = translations[currentLocale].charts;
  localeText(document.getElementById('trend-title'), charts.trend);
  localeText(document.getElementById('category-title'), charts.category);
  localeText(document.getElementById('top-products-title'), charts.products);
  localeText(document.getElementById('insights-title'), translations[currentLocale].insights);
}

function renderTrendChart() {
  const chart = echarts.init(document.getElementById('trend-chart'));
  const labels = currentLocale === 'zh' ? trendData.monthsZh : trendData.months;
  const revenueName = currentLocale === 'zh' ? '收入' : 'Revenue';
  const ordersName = currentLocale === 'zh' ? '订单' : 'Orders';

  const option = {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'line' },
      backgroundColor: 'rgba(12, 18, 34, 0.96)',
      borderColor: '#2a6cf2',
      textStyle: { color: '#fff' }
    },
    legend: {
      textStyle: { color: '#cfd8ef' },
      data: [revenueName, ordersName]
    },
    grid: {
      left: '4%',
      right: '3%',
      bottom: '10%',
      top: '18%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: labels,
      axisLine: { lineStyle: { color: '#3c5c8c' } },
      axisTick: { show: false },
      axisLabel: { color: '#9fb3d5' }
    },
    yAxis: {
      type: 'value',
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: { lineStyle: { color: 'rgba(255,255,255,0.06)' } },
      axisLabel: { color: '#9fb3d5' }
    },
    series: [
      {
        name: revenueName,
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 8,
        areaStyle: { opacity: 0.18 },
        lineStyle: { width: 3 },
        emphasis: { focus: 'series' },
        data: trendData.revenue
      },
      {
        name: ordersName,
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 8,
        areaStyle: { opacity: 0.12 },
        lineStyle: { width: 3 },
        emphasis: { focus: 'series' },
        data: trendData.orders
      }
    ]
  };

  chart.setOption(option);
}

function renderCategoryChart() {
  const chart = echarts.init(document.getElementById('category-chart'));
  const categories = categoryData[currentLocale];
  const option = {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c}% ({d}%)',
      textStyle: { color: '#fff' },
      backgroundColor: 'rgba(12, 18, 34, 0.94)'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      top: 'center',
      textStyle: { color: '#cfd8ef' }
    },
    series: [
      {
        type: 'pie',
        radius: ['52%', '76%'],
        center: ['60%', '50%'],
        label: { show: false },
        emphasis: {
          scale: true,
          itemStyle: { shadowBlur: 18, shadowColor: 'rgba(0, 0, 0, 0.45)' }
        },
        data: categories.map((item) => ({ name: item.name, value: item.value })),
        itemStyle: { borderColor: '#08101d', borderWidth: 2 }
      }
    ]
  };

  chart.setOption(option);
}

function updateLocaleButtons() {
  document.querySelectorAll('.lang-btn').forEach((button) => {
    const locale = button.dataset.locale;
    button.classList.toggle('active', locale === currentLocale);
    button.onclick = () => {
      currentLocale = locale;
      renderAll();
    };
  });
}

function renderAll() {
  renderHero();
  renderMetrics();
  renderChartTitles();
  renderTopProductsTable();
  renderHighlights();
  renderTrendChart();
  renderCategoryChart();
  updateLocaleButtons();
}

window.addEventListener('DOMContentLoaded', renderAll);
window.addEventListener('resize', () => {
  echarts.getInstanceByDom(document.getElementById('trend-chart'))?.resize();
  echarts.getInstanceByDom(document.getElementById('category-chart'))?.resize();
});
