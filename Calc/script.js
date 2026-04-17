const sipForm = document.getElementById("sipForm");
const resetBtn = document.getElementById("resetBtn");
const errorText = document.getElementById("errorText");

const investedAmountEl = document.getElementById("investedAmount");
const estimatedReturnsEl = document.getElementById("estimatedReturns");
const totalValueEl = document.getElementById("totalValue");

const currencyFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0
});

function formatCurrency(value) {
  return currencyFormatter.format(value);
}

function calculateSipFutureValue(monthlyInvestment, annualRate, years) {
  const months = years * 12;
  const monthlyRate = annualRate / 12 / 100;

  const investedAmount = monthlyInvestment * months;

  if (monthlyRate === 0) {
    return {
      investedAmount,
      estimatedReturns: 0,
      totalValue: investedAmount
    };
  }

  const totalValue =
    monthlyInvestment *
    ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
    (1 + monthlyRate);

  const estimatedReturns = totalValue - investedAmount;

  return {
    investedAmount,
    estimatedReturns,
    totalValue
  };
}

function renderResult(result) {
  investedAmountEl.textContent = formatCurrency(result.investedAmount);
  estimatedReturnsEl.textContent = formatCurrency(result.estimatedReturns);
  totalValueEl.textContent = formatCurrency(result.totalValue);
}

function readInput(id) {
  return Number(document.getElementById(id).value);
}

function validateInputs(monthlyInvestment, annualRate, years) {
  if (
    !Number.isFinite(monthlyInvestment) ||
    !Number.isFinite(annualRate) ||
    !Number.isFinite(years)
  ) {
    return "Please enter valid numbers in all fields.";
  }

  if (monthlyInvestment <= 0) {
    return "Monthly investment should be greater than 0.";
  }

  if (annualRate < 0) {
    return "Expected return cannot be negative.";
  }

  if (years <= 0) {
    return "Time period should be at least 1 year.";
  }

  return "";
}

function handleCalculation() {
  const monthlyInvestment = readInput("monthlyInvestment");
  const annualRate = readInput("annualReturn");
  const years = readInput("timePeriod");

  const validationError = validateInputs(monthlyInvestment, annualRate, years);
  errorText.textContent = validationError;

  if (validationError) {
    return;
  }

  const result = calculateSipFutureValue(monthlyInvestment, annualRate, years);
  renderResult(result);
}

sipForm.addEventListener("submit", (event) => {
  event.preventDefault();
  handleCalculation();
});

resetBtn.addEventListener("click", () => {
  sipForm.reset();
  document.getElementById("monthlyInvestment").value = 5000;
  document.getElementById("annualReturn").value = 12;
  document.getElementById("timePeriod").value = 10;
  errorText.textContent = "";
  renderResult({
    investedAmount: 0,
    estimatedReturns: 0,
    totalValue: 0
  });
});

handleCalculation();
