Question

Consider the following table representing an itemized invoice from a car repair shop.

Using jQuery or vanilla JavaScript, provide a snippet of code that will replace all the "?" in the table below with the expected values.

The last column in each item row should contain a total of the parts + labor costs
The final column should contain the total of all the previous rows
If you choose to use jQuery, you can assume that window.$ is available globally
Bonus Points

What happens if your code is executed more than once? Will the totals remain correct?
What if additional styling markup is later added to the table? For example, what if each cost is wrapped in a <strong> tag? Will your code need to change?

```  
<table id="repair-invoice">
    <tr>
        <th>Item</th>
        <th>Parts</th>
        <th>Labor</th>
        <th>Total</th>
    </tr>
    <tr>
        <td>Automatic Transmission Replacement</td>
        <td>$1,809.99</td>
        <td>$830.00</td>
        <td>?</td>
    </tr>
    <tr>
        <td>Exhaust system replace</td>
        <td>$279.99</td>
        <td>$225.00</td>
        <td>?</td>
    </tr>
    <tr>
        <td>Replace air filter</td>
        <td>$9.99</td>
        <td>$0.00</td>
        <td>?</td>
    </tr>
    <tr>
        <td colspan="3">Total</td>
        <td>?</td>
    </tr>
</table>

<script type="text/javascript">
   // Your code here...
</script>
```
