import React, { useState, useEffect, createContext } from "react";

import Search from "../Search";

import { AppBar, Toolbar, InputBase, Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import { search } from "../../grpc/actions";

import { useStyles } from "./Styles";

export const SearchContext = createContext();

const Header = () => {
    const classes = useStyles();
    const [loading, setLoading] = useState(true);
    const [searchText, setSearchText] = useState("");
    const [data, setData] = useState(null);

    useEffect(() => {
        setLoading(true);
        if (searchText.length >= 3) {
            search(searchText)
                .then(response => {
                    setData(response);
                    setLoading(false);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }, [searchText]);

    const highlightSearchText = text => {
        const cleanSearchText = searchText
            .toString()
            .toLowerCase()
            .trim();
        const cleanText = text
            .toString()
            .toLowerCase()
            .trim();

        if (cleanText.includes(cleanSearchText)) {
            const highlightText = text
                .toString()
                .replace(searchText, `<mark>${searchText}</mark>`);
            return (
                <span
                    dangerouslySetInnerHTML={{
                        __html: highlightText
                    }}
                ></span>
            );
        }
        return text;
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput
                            }}
                            inputProps={{ "aria-label": "search" }}
                            value={searchText}
                            onChange={e => setSearchText(e.target.value)}
                        />
                    </div>
                    <Button
                        color="secondary"
                        className={classes.logoutButton}
                        variant="contained"
                        onClick={() => {
                            localStorage.removeItem("authToken");
                            window.location.href = "/";
                        }}
                    >
                        Выйти
                    </Button>
                </Toolbar>
            </AppBar>
            {searchText.length >= 3 ? (
                <SearchContext.Provider
                    value={{
                        ...data,
                        highlightSearchText,
                        searchText,
                        loading,
                        resetSearchText: () => setSearchText("")
                    }}
                >
                    <Search />
                </SearchContext.Provider>
            ) : null}
        </div>
    );
};

export default Header;
