import React from 'react';

const CatList = (props) => {
  function listCats() {
    return props.catPics.map((catPic, index) => {
      return (
        <img alt={catPic.url} key={index}/>
      )
    })
  }

  return (
    <div>
      {listCats()}
    </div>
  )
}

export default CatList;
