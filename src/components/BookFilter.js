import React from "react";
import {useContext} from "react";
import {ProductContext} from "../context";
import './BookFilter.css'
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

const BookFilter = () => {

    const context = useContext(ProductContext);

    const {

    author,
    maxprice,
    language,
    products,
    price,
    free,
    paid,
    handleChange
    } = context;

    let authors = getUnique(products,"author");
    authors = ["All",...authors];

    authors = authors.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ));

    let languages = getUnique(products,"language");
    languages = ["All",...languages];
  
    languages = languages.map((item, index) => (
      <option key={index} value={item}>
        {item}
        </option>
    ));

    return (
        <section className="filter-container">
            <form className="filter-form">
                <div className="form-group">
                    <label htmlFor="type">Author</label>
                    <select
                    name = "author"
                    id = "author"
                    onChange = {handleChange}
                    className = "form-control"
                    value = {author}>
                      {authors}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="language">Language</label>
                    <select
                    
                    name = "language"
                    id = "language"
                    onChange = {handleChange}
                    className = "form-control"
                    value = {language}

                    >
                        {languages}
                    </select>
                </div>
                <div className="form-group">
                <label htmlFor="price">Book Price ${price}</label>
                    <input type = "range"
                    name = "price"
                    min = {0}
                    maxprice = {maxprice}
                    id = "price"
                    value = {price}
                    onChange = {handleChange}
                    className = "form-control"
                    >
                    </input>
                </div>
                <div className="form-group">
                    <div className="single-extra">
                    <input
                    type="checkbox"
                    name="free"
                    id="free"
                    checked={free}
                    onChange={handleChange}
                    />
                    <label htmlFor="free">Free</label>
                    </div>
                <div className="single-extra">
                    <input
                    type="checkbox"
                    name="paid"
                    checked={paid}
                    onChange={handleChange}
                    />
                    <label htmlFor="paid">Paid</label>
                 </div>
                </div>
            </form>
        </section>
    )
}

export default BookFilter;