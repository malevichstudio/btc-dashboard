import { createMuiTheme, withStyles } from "@material-ui/core/styles";
import { amber, grey, red } from "@material-ui/core/colors";

export const GlobalCss = withStyles({
    "@global": {
        ".recharts-tooltip-item-list": {
            display: "none !important"
        },
        ".simple-field": {
            flexDirection: "column",
            marginBottom: "15px",
            "& label": {
                flex: 0,
                alignSelf: "auto",
                marginBottom: "10px"
            },
            "& > .MuiFormHelperText-root": {
                top: "5px"
            }
        },
        ".danger-button": {
            color: red[500]
        },
        ".pagination": {
            listStyle: "none",
            padding: "20px",
            display: "flex",
            alignItems: "center",
            margin: "0",
            "& li": {
                cursor: "pointer",
                backgroundColor: "#fff",
                minWidth: "32px",
                maxWidth: "32px",
                height: "32px",
                marginRight: "8px",
                lineHeight: "30px",
                textAlign: "center",
                verticalAlign: "middle",
                border: "1px solid #d9d9d9",
                borderRadius: "4px",
                outline: "none",
                "&.active": {
                    borderColor: "#1890ff"
                },
                "&:hover": {
                    borderColor: "#1890ff",
                    transition: "all .3s",
                    "& a": {
                        color: "#1890ff",
                        transition: "all .3s"
                    }
                }
            },
            "& a": {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                padding: "0 6px"
            }
        }
    }
})(() => null);

export const theme = createMuiTheme({
    palette: {
        secondary: {
            main: amber[500]
        },
        grey: {
            main: grey[200],
            primary: grey[500]
        },
        danger: {
            main: red[200],
            primary: red[500]
        }
    },
    overrides: {
        MuiButton: {
            root: {
                textTransform: "none"
            }
        },
        MuiTable: {
            root: {
                minWidth: "650px"
            }
        },
        MuiTableCell: {
            root: {
                padding: "10px 20px 10px 16px",
                "& mark": {
                    backgroundColor: "transparent",
                    color: red[500]
                }
            }
        },
        MuiSelect: {
            select: {
                padding: "10px 30px 10px 14px",
                minWidth: "100px"
            }
        },
        MuiInputBase: {
            root: {
                width: "100%"
            }
        },
        MuiOutlinedInput: {
            input: {
                padding: "10px"
            }
        },
        MuiFormControl: {
            root: {
                width: "100%",
                marginBottom: "20px",
                display: "flex",
                flexDirection: "row"
            }
        },
        MuiInputLabel: {
            formControl: {
                position: "static !important",
                transform: "none !important",
                flex: "0 0 150px",
                alignSelf: "center",
                paddingRight: "15px",
                fontSize: "15px"
            }
        },
        MuiFormHelperText: {
            root: {
                position: "absolute",
                right: "0",
                top: "-15px",
                color: red[500],
                margin: "0 !important"
            }
        },
        MuiButtonGroup: {
            root: {
                marginTop: "15px",
                justifyContent: "flex-end",
                "& button": {
                    borderRadius: "4px !important",
                    marginRight: "10px",
                    maxWidth: "160px",
                    "&:last-child": {
                        marginRight: 0
                    }
                }
            }
        }
    }
});
