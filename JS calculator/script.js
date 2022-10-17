
function display(value)
{
    document.getElementById('textarea').value += value
}
function clr()
{
    document.getElementById('textarea').value=''
}
function calculate()
{
    var val = document.getElementById('textarea').value
    var ans =  eval(val)
    document.getElementById('textarea').value = ans
}