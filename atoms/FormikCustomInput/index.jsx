import { useState } from "react";

import { Field, ErrorMessage, getIn, FastField } from "formik";
import PropTypes from "prop-types";

import {
  TextField,
  IconButton,
  InputAdornment,
  Tooltip,
  MenuItem,
  Typography,
  InputLabel,
  Box,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import useStyles from "./styles";

const FormikCustomInput = ({
  type,
  pClass,
  label,
  placeholder,
  variant,
  name,
  haveTooltip,
  tooltipText,
  multiline,
  required,
  error,
  helperText,
  select,
  selectItem,
  onChange,
  onBlur,
  fastField,
  shrink,
  cvvHelpHandler,
  ...restProps
}) => {
  const classes = useStyles();

  const [visibility, setVisibility] = useState(false);

  const typeChangeHandler = () => {
    setVisibility((prev) => !prev);
  };

  return (
    <Field name={name}>
      {({ field, form }) => {
        return (
          <TextField
            {...field}
            classes={{ root: classes.placeholder }}
            label={<Typography variant="subtitle3">{label}</Typography>}
            id={label}
            variant={variant}
            className={[classes.root, pClass].join(" ")}
            type={type !== "password" ? type : visibility ? "text" : "password"}
            name={name}
            onChange={onChange !== null ? onChange : form.handleChange}
            onBlur={onBlur !== null ? onBlur : form.handleBlur}
            required={required}
            helperText={<ErrorMessage name={name} />}
            error={Boolean(
              getIn(form.touched, name) && getIn(form.errors, name)
            )}
            placeholder={placeholder}
            size="medium"
            fullWidth
            multiline={multiline}
            select={select}
            sx={{
              "& label": {
                "&.Mui-focused": {
                  color: (theme) => theme.colors.blue,
                },
              },
              "& .MuiSvgIcon-root": {
                color: (theme) => theme.colors.blue,
              },
              "& .MuiOutlinedInput-root:hover": {
                "& > fieldset": {
                  borderColor: (theme) => theme.colors.blue,
                },
              },
              "& .MuiOutlinedInput-root": {
                "& .Mui-focused": {
                  borderColor: (theme) => theme.colors.blue,
                },
              },
              "& .MuiFormLabel-root": {
                color: (theme) => theme.colors.mono4,
                "& .Mui-focused": {
                  color: (theme) => theme.colors.blue,
                },
              },
              // ".makeStyles-input-2": {
              //   fontSize: "13px",
              //   color: (theme) => theme.colors.blue,
              // },
            }}
            InputLabelProps={{
              shrink: shrink ? true : !(field?.value?.length <= 0),
              className: shrink
                ? undefined
                : field?.value?.length <= 0 && !multiline
                ? classes.inputLabelNoShrink
                : field?.value?.length <= 0 && multiline
                ? classes.inputLabelMultilineNoShrink
                : undefined,
              // style: {
              //   textOverflow: "ellipsis",
              //   whiteSpace: "nowrap",
              //   overflow: "hidden",
              //   width: "100%",
              //   //fontSize: "5px",
              //   // color: "green",
              // },
            }}
            InputProps={{
              // classes: { input: classes.input },
              className: !multiline ? classes.input : classes.multiline,
              endAdornment: (type === "password" ||
                type === "cvv" ||
                type === "cardNumber" ||
                haveTooltip) && (
                <InputAdornment
                  position={
                    type === "password" ||
                    type === "cvv" ||
                    type === "cardNumber"
                      ? "end"
                      : "start"
                  }
                >
                  {type === "password" ? (
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={typeChangeHandler}
                    >
                      {visibility ? (
                        <Visibility sx={{ fontSize: 18 }} />
                      ) : (
                        <VisibilityOff sx={{ fontSize: 18 }} />
                      )}
                    </IconButton>
                  ) : type === "cvv" ? (
                    <Typography
                      variant="caption3"
                      sx={{ cursor: "pointer" }}
                      onClick={cvvHelpHandler}
                    >
                      help?
                    </Typography>
                  ) : type === "cardNumber" ? (
                    field.value.substring(0, 2) > 39 &&
                    field.value.substring(0, 2) < 50 ? (
                      <img
                        src="/logo/visa.svg"
                        alt="logo"
                        width={30}
                        height={30}
                      />
                    ) : field.value.substring(0, 2) > 49 &&
                      field.value.substring(0, 2) < 60 ? (
                      <img
                        src="/logo/mastercard.svg"
                        alt="logo"
                        width={50}
                        height={30}
                      />
                    ) : (
                      ""
                    )
                  ) : (
                    haveTooltip && (
                      <Tooltip
                        title={tooltipText}
                        arrow
                        className={classes.tooltip}
                      >
                        <IconButton className={classes.infoIcon}>
                          <InfoOutlinedIcon
                            sx={{
                              color: (theme) => theme.colors.orange,
                              fontSize: 18,
                            }}
                          />
                        </IconButton>
                      </Tooltip>
                    )
                  )}
                </InputAdornment>
              ),
            }}
            {...restProps}
          >
            {select &&
              selectItem.map((option) => (
                <MenuItem key={option.key} value={option.value}>
                  {option.key}
                </MenuItem>
              ))}
          </TextField>
        );
      }}
    </Field>
  );
};

FormikCustomInput.defaultProps = {
  pClass: "",
  tooltipText: "",
  haveTooltip: false,
  multiline: false,
  variant: "outlined",
  required: false,
  error: false,
  helperText: "",
  select: false,
  selectItem: [],
  onChange: null,
  onBlur: null,
  fastField: true,
  shrink: false,
  type: "text",
  placeholder: "",
  cvvHelpHandler: () => {},
};

FormikCustomInput.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  name: PropTypes.string.isRequired,
  haveTooltip: PropTypes.bool,
  tooltipText: PropTypes.string,
  multiline: PropTypes.bool,
  pClass: PropTypes.string,
  variant: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  select: PropTypes.bool,
  selectItem: PropTypes.arrayOf(PropTypes.shape({})),
  fastField: PropTypes.bool,
  shrink: PropTypes.bool,
  cvvHelpHandler: PropTypes.func,
};

export default FormikCustomInput;
