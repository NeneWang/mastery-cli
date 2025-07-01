---
tags:
  - CFA
---
- remember u can use mathpnix to take the photos
- Everytime you finish or mid video, pause and run your flashcards of that modulo

## 2.1 Present and Future Values

Provide the  formula for future value with continuous compounding:
?x
- $\mathrm{FV}=\mathrm{PV} \times \mathrm{e}^{\mathrm{r} t}$
reloa
#### Example Zero Coupon Bond

Example:
A zero-coupon bond has a face value of $\$ 1,000$ and 15 years to maturity. The bond's yield is $4 \%$ with annual compounding.
?p: Calculate the price of the bond.
??x
Using the PV formula:

$$
\begin{aligned}
P V & =F V /(1+r)^t \\
& =\$ 1,000 /(1.04)^{15}=\$ 555.26
\end{aligned}
$$
Using the calculator:
FV & $=1,000$ & 
N & $=15$ & 
$\mathrm{I} / \mathrm{Y}$ & $=4$ & 
PMT & $=0$ & 
CPT & PV $=\$ 555.26$

x??

#### Zero Coupon Bond with a  Negative Yield

Example:
A zero-coupon bond with 15 years to maturity has a face value of $\$ 1,000$. Its yield is a $-0.5 \%$ yield with annual compounding. Calculate the price of the bond.
?p: Calculate the price of the bond.
?x
Using the calculator:
FV & $=1,000$ & (future / face value) \\
N & $=15$ & (bond maturity) \\
$\mathrm{I} / \mathrm{Y}$ & $=-0.5$ & (annual yield) \\
PMT & $=0$ & (no coupon payments) \\
CPT PV & $=\$ 1,078.09$
Using the PV formula:
$$
\begin{aligned}
P V & =F V /(1+r)^t \\
& =\$ 1,000 /(1-0.005)^{15}=\$ 1,078.09
\end{aligned}
$$

#### Fixed Coupon Bond
Fixed coupon
- May be paid annually, semiannually, or quarterly
- Fixed percentage of the bond's face value (par value)
- Coupon remains fixed, but bond's yield may change
Fixed coupon vs. bond yield
- If the coupon = yield:: bond will trade at par
- If the coupon > yield:: bond will trade above par
- If the coupon < yield:: bond will trade at a discount to par


Example:
Consider a 10-year, 10\% coupon, annual-pay bond with \$1,000 pa value and a yield to maturity of 8\%.
Q1. Determine if the bond will be priced above, below, or at par (without a calculation).
Q2. Calculate the price of the bond.
?x
Q1. Will the bond trade above, below, or at par?
The coupon ( $10 \%$ ) is > the yield ( $8 \%$ ), so the bond will trade above par.
.
Q2. Calculate the price of the bond.
$$
\begin{aligned}
& F V=1,000 \\
& N \quad=10 \\
& I / Y=8 \\
& P M T=100(10 \% \times \$ 1,000) \\
& C P T P V=\$ 1,134.20
\end{aligned}
$$



### Perpetual and Amortizing Bonds

Perpetual bonds
- Have no maturity date
- Also known as perpetuities
- PV of a perpetuity = cash flow received / required return

Amortizing bonds
- Regular payments to investors include:: interest and principal
- With fixed-coupon bonds, principal is only repaid at maturity
- Amortizing bonds are annuity instruments


#### Computing Loan Payments
Amortizing loan payments contain both interest and principal. This is also known as an annuity payment.

Example:
Consider a \$2,000 loan over a 13-year period with annual loan payments at the end of each year. The annual interest rate is $6 \%$. Calculate the annual loan payment.
?p: Calculate the annual loan payment
?x
$$
\begin{aligned}
&\text { Annual loan payment: }\\
&\begin{array}{lll}
\mathrm{PV} & =2,000 & \\
\mathrm{FV} & =0 & \\
\mathrm{I} / \mathrm{Y} & =6 & \\
\mathrm{~N} & =13 & \text { (fully amortizing) } \\
& \text { (years) }
\end{array}\\
&\text { CPT PMT }=-\$ 225.92 \text { is the annual payment }
\end{aligned}
$$

#### Valuing Equity Securities
What is the value of a security?
- The present value of its future cash flows

$$
\begin{aligned}
& A=L+\epsilon \\
& A-L=\epsilon
\end{aligned}
$$


Preferred and common stock
- Preferred stock pays a:: fixed dividend, assumed to be paid in perpetuity
- Common stock is:: a residual claim to a company's assets, with uncertain cash flows
- Required return:: is the discount rate used to bring future cash flows back to present values


#### Example Value preferred Stock as a Perpetuity
Value preferred stock as a perpetuity
- Preferred stock pays a fixed stream of dividends
- Dividends are assumed to be infinite
- PV of a perpetuity = dividend received / required return

Example:
A company's $\$ 100$ par preferred stock pays a $\$ 5.00$ annual dividend. The required return is $8 \%$. Calculate the value of the preferred stock.
?x
$$
\begin{aligned}
\text { Value } \quad & =\text { dividend } / \text { required return } \\
& =\$ 5.00 / 0.08 \\
& =\$ 62.50 \\
\end{aligned}
$$

Future dividends are uncertain (three approaches):
1. Assume a constant future dividend (as with preferred stock)
2. Assume a constant growth rate of dividends
3. Assume a changing growth rate of dividends

Constant growth dividend discount model
- Also known as the Gordon growth model
- Dividends are expected to grow at a constant growth rate, $g_c$
- Required equity return, $\mathrm{k}_{\mathrm{e}}$, must be greater than $\mathrm{g}_{\mathrm{c}}$


## Module 2.2: Implied Returns and Cash Flow Additivity


#### Required Rate of Return

Given a present value, a future value, a time period, and any interim cash flows, we can solve for the required return of a security.

Example:
A zero-coupon bond with a 15-year maturity has a face value of $\$ 1,000$. The bond is priced at $\$ 650$. Calculate the annualized return, assuming annual compounding.
?X
Using the calculator: the result should be iY of 2.9
$$
\begin{aligned}
&\text { Using the calculator: }\\
&\begin{aligned}
\mathrm{PV} & =-650 \\
\mathrm{FV} & =1,000 \\
\mathrm{~N} & =15 \\
\text { PMT } & =0
\end{aligned}
\end{aligned}
$$

Now, consider that this
Example:
Consider a 10-year, 10\% coupon, annual-pay bond with a price of $\$ 1,085.00$. Calculate the yield to maturity.
?x
this should be 8.96
$$
\begin{aligned}
P V & =-1,085 \\
F V & =1,000 \\
N & =10 \\
P M T & =100(=10 \% \times \$ 1,000 \text { par value })
\end{aligned}
$$


#### Cash Flow Additivity Principle

The cash flow additivity principle states that the PV of any stream of cash flows equals to what of the pv inidividual cashflows?:: the sum of the PVs of the individual cash flows.

Example:
A security makes payments of $\$ 100, \$ 100, \$ 400$, and $\$ 100$ over the next four years.
Q1. Calculate the PV of the security, assuming a discount rate of $10 \%$.
Q2. Calculate the PV of a 4-year annuity paying \$100 and a 3-year zero-coupon bond with a par value of $\$ 300$, and a $10 \%$ required return.
?x
In calculator to run the first one is:
clear out usin 2nd CE|C
1. CF
2. Flecha abajo hasa que haya CF0 y inserta usando button enter al costado de la flecha
3. cuando este listo apretas npv, insertas el discount rate y apretas cpt
Answer should be 542
You can also add them up like:
>![[Pasted image 20250629161409.png]]
>  By adding those two computations you get the same result. 


To clear all work from the calculator press
?x
2nd +fv (clr TVM)
2nd CLE|C  (CLWORK)


No-Arbitrage Principle states thatn if two sets of cash flows are identical under all conditions...
?x
The law of one price states that if two sets of cash flows are identical under all conditions, they will have the same price today.

No-arbitrage condition states that If prices are not identical, investors will...
?x
If prices are not identical, investors will buy the lower-priced asset, and sell the higher-priced asset, which drives the prices together.

No-arbitrage valuation states that Forward interest rates, forward exchange rates, and option pricing ...
?x
Forward interest rates, forward exchange rates, and option pricing all use the principle that equivalent cash flows must have the same value.

### Forward Interest Rates

A forward interest rate is a borrowing or lending rate that starts...
?x
at some future date, for a set time period.


| $1 y 1 y$ Something interesting | starts in 1 year  | 1 -year rate |
| :------------------------------ | :---------------- | :----------- |
| $2 y 1 y$                       | starts in 2 years | 1 -year rate |
| $3 y 2 y$                       | starts in 3 years | 2 -year rate |

A spot interest rate is a borrowing or lending rate that starts...
?x
today, for a set time period.


No-arbitrage
- Consider a 3-year spot rate.
- Compare to a 1 -year spot rate; reinvest at the 1 y 1 y and at the 2 y 1 y .
- The overall 3 -year return must be equal.
$$
\begin{aligned}
&\text { No-arbitrage relationship: }\\
&\left(1+S_2\right)^2=\left(1+S_1\right)(1+1 y 1 y)
\end{aligned}
$$

Example:
The 2 -year spot rate is $8 \%$ and the 1 -year spot rate is $4 \%$.
Calculate the 1-year forward 1-year rate (1y1y).
?x
$$
1+1 y 1 y=\frac{(1.08)^2}{1.04}=1 + 12.154 \%
$$

