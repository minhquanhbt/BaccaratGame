import Moment from 'react-moment';

export const pushItem = (item , refData ) => refData.push(item);
export const removeItem = (key  , refData ) => refData.child(key).remove();
export const updateItem = (item , key , refData ) => refData.child(key).set(item);
export const renderDate = (time ) => <Moment format="MMMM D, YYYY">{time}</Moment>;
export const formatField = (str )=>
  str
    .split(',')
    .map((elm ) => elm.trim())
    .filter(elm => elm !== '');

export const tabContent =(wrap , listItems  , buttons  )=>{
  const self = document.querySelector(wrap);
  const btns = document.querySelectorAll(buttons);
  const items=document.querySelectorAll(listItems);
  if (self===null) return;
  btns.forEach((btn,index)=>{
    btn.addEventListener('click',()=>{
      btns.forEach(item=>item.classList.remove('active'));
      items.forEach(item=>item.classList.remove('active'));

      btns[index].classList.add('active');
      items[index].classList.add('active');
    })
  })
}    