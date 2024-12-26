import { useState, useRef, useEffect } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import { InputBase, List, ListItem, Box, Typography, styled } from '@mui/material';

import { Link } from 'react-router-dom';
import { dealData } from '../../constant/data';

const SearchContainer = styled(Box)`
  position: relative;
  border-radius: 18px;
  margin-left: 20px; /* Spacing from left */
  width: 65%; /* Wider search bar */
  background-color: #f1f3f6;
  display: flex;
  align-items: center;
  padding: 0 15px;
  border: 1px solid #d1d5db;
  height: 50px;
`;

const SearchIconWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9ca3af;
  margin-right: 10px;
`;

const ListWrapper = styled(List)`
  position: absolute;
  top: 50px;
  left: 0;
  color: #000;
  background: #FFFFFF;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  width: 100%;
  z-index: 10;
`;

const ListItemStyled = styled(ListItem)`
  cursor: pointer;
  padding: 10px;
  &:hover {
    background-color: #e8f4fd;
  }
  a {
    width: 100%;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
  }
`;

const InputSearchBase = styled(InputBase)`
  font-size: 16px;
  width: 100%;
  color: #6b7280;
  &::placeholder {
    color: #9ca3af;
    font-size: 16px;
  }
`;

const Search = () => {
  const [text, setText] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showDefault, setShowDefault] = useState(false);
  const searchRef = useRef(null);

  const defaultRecommendations = [
    { name: "Mobiles", link: "/category/mobiles" },
    { name: "Shoes", link: "/category/shoes" },
    { name: "T-Shirts", link: "/category/tshirts" },
    { name: "Laptops", link: "/category/laptops" },
    { name: "Watches", link: "/category/watches" },
    { name: "TV", link: "/category/tv" },
    { name: "Sarees", link: "/category/sarees" },
  ];

  const handleTextChange = (event) => {
    const query = event.target.value;
    setText(query);

    if (query.trim() !== '') {
      const filtered = dealData.filter((product) =>
        product.title.longTitle.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
      setShowDefault(false);
    } else {
      setFilteredProducts([]);
      setShowDefault(true);
    }
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setShowDefault(false);
      setFilteredProducts([]);
    }
  };

  const handleLinkClick = () => {
    setShowDefault(false);
    setFilteredProducts([]);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <SearchContainer ref={searchRef}>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <InputSearchBase
        placeholder="Search for Products, Brands and More"
        inputProps={{ 'aria-label': 'search' }}
        value={text}
        onChange={handleTextChange}
        onFocus={() => setShowDefault(true)}
      />
      {(showDefault || filteredProducts.length > 0) && (
        <ListWrapper>
          {showDefault && (
            <>
              <Typography style={{ padding: "10px", fontWeight: 600 }}>
                Discover More
              </Typography>
              {defaultRecommendations.map((recommendation, index) => (
                <ListItemStyled key={index}>
                  <Link
                    to={recommendation.link}
                    onClick={handleLinkClick}
                  >
                    <SearchIcon style={{ marginRight: '8px', color: '#9ca3af' }} />
                    {recommendation.name}
                  </Link>
                </ListItemStyled>
              ))}
            </>
          )}
          {filteredProducts.map((product) => (
            <ListItemStyled key={product.id}>
              <Link
                to={`/product/${product.id}`}
                onClick={handleLinkClick}
              >
                {product.title.longTitle}
              </Link>
            </ListItemStyled>
          ))}
        </ListWrapper>
      )}
    </SearchContainer>
  );
};

export default Search;
