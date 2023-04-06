/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Profile } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ProfileCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    ArtistName: "",
    Genre: "",
    Role: "",
    ProfilePic: "",
    Bio: "",
    Location: "",
    Terms: "",
  };
  const [ArtistName, setArtistName] = React.useState(initialValues.ArtistName);
  const [Genre, setGenre] = React.useState(initialValues.Genre);
  const [Role, setRole] = React.useState(initialValues.Role);
  const [ProfilePic, setProfilePic] = React.useState(initialValues.ProfilePic);
  const [Bio, setBio] = React.useState(initialValues.Bio);
  const [Location, setLocation] = React.useState(initialValues.Location);
  const [Terms, setTerms] = React.useState(initialValues.Terms);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setArtistName(initialValues.ArtistName);
    setGenre(initialValues.Genre);
    setRole(initialValues.Role);
    setProfilePic(initialValues.ProfilePic);
    setBio(initialValues.Bio);
    setLocation(initialValues.Location);
    setTerms(initialValues.Terms);
    setErrors({});
  };
  const validations = {
    ArtistName: [],
    Genre: [],
    Role: [],
    ProfilePic: [],
    Bio: [],
    Location: [],
    Terms: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          ArtistName,
          Genre,
          Role,
          ProfilePic,
          Bio,
          Location,
          Terms,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Profile(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ProfileCreateForm")}
      {...rest}
    >
      <TextField
        label="Artist name"
        isRequired={false}
        isReadOnly={false}
        value={ArtistName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ArtistName: value,
              Genre,
              Role,
              ProfilePic,
              Bio,
              Location,
              Terms,
            };
            const result = onChange(modelFields);
            value = result?.ArtistName ?? value;
          }
          if (errors.ArtistName?.hasError) {
            runValidationTasks("ArtistName", value);
          }
          setArtistName(value);
        }}
        onBlur={() => runValidationTasks("ArtistName", ArtistName)}
        errorMessage={errors.ArtistName?.errorMessage}
        hasError={errors.ArtistName?.hasError}
        {...getOverrideProps(overrides, "ArtistName")}
      ></TextField>
      <TextField
        label="Genre"
        isRequired={false}
        isReadOnly={false}
        value={Genre}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ArtistName,
              Genre: value,
              Role,
              ProfilePic,
              Bio,
              Location,
              Terms,
            };
            const result = onChange(modelFields);
            value = result?.Genre ?? value;
          }
          if (errors.Genre?.hasError) {
            runValidationTasks("Genre", value);
          }
          setGenre(value);
        }}
        onBlur={() => runValidationTasks("Genre", Genre)}
        errorMessage={errors.Genre?.errorMessage}
        hasError={errors.Genre?.hasError}
        {...getOverrideProps(overrides, "Genre")}
      ></TextField>
      <TextField
        label="Role"
        isRequired={false}
        isReadOnly={false}
        value={Role}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ArtistName,
              Genre,
              Role: value,
              ProfilePic,
              Bio,
              Location,
              Terms,
            };
            const result = onChange(modelFields);
            value = result?.Role ?? value;
          }
          if (errors.Role?.hasError) {
            runValidationTasks("Role", value);
          }
          setRole(value);
        }}
        onBlur={() => runValidationTasks("Role", Role)}
        errorMessage={errors.Role?.errorMessage}
        hasError={errors.Role?.hasError}
        {...getOverrideProps(overrides, "Role")}
      ></TextField>
      <TextField
        label="Profile pic"
        isRequired={false}
        isReadOnly={false}
        value={ProfilePic}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ArtistName,
              Genre,
              Role,
              ProfilePic: value,
              Bio,
              Location,
              Terms,
            };
            const result = onChange(modelFields);
            value = result?.ProfilePic ?? value;
          }
          if (errors.ProfilePic?.hasError) {
            runValidationTasks("ProfilePic", value);
          }
          setProfilePic(value);
        }}
        onBlur={() => runValidationTasks("ProfilePic", ProfilePic)}
        errorMessage={errors.ProfilePic?.errorMessage}
        hasError={errors.ProfilePic?.hasError}
        {...getOverrideProps(overrides, "ProfilePic")}
      ></TextField>
      <TextField
        label="Bio"
        isRequired={false}
        isReadOnly={false}
        value={Bio}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ArtistName,
              Genre,
              Role,
              ProfilePic,
              Bio: value,
              Location,
              Terms,
            };
            const result = onChange(modelFields);
            value = result?.Bio ?? value;
          }
          if (errors.Bio?.hasError) {
            runValidationTasks("Bio", value);
          }
          setBio(value);
        }}
        onBlur={() => runValidationTasks("Bio", Bio)}
        errorMessage={errors.Bio?.errorMessage}
        hasError={errors.Bio?.hasError}
        {...getOverrideProps(overrides, "Bio")}
      ></TextField>
      <TextField
        label="Location"
        isRequired={false}
        isReadOnly={false}
        value={Location}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ArtistName,
              Genre,
              Role,
              ProfilePic,
              Bio,
              Location: value,
              Terms,
            };
            const result = onChange(modelFields);
            value = result?.Location ?? value;
          }
          if (errors.Location?.hasError) {
            runValidationTasks("Location", value);
          }
          setLocation(value);
        }}
        onBlur={() => runValidationTasks("Location", Location)}
        errorMessage={errors.Location?.errorMessage}
        hasError={errors.Location?.hasError}
        {...getOverrideProps(overrides, "Location")}
      ></TextField>
      <TextField
        label="Terms"
        isRequired={false}
        isReadOnly={false}
        value={Terms}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ArtistName,
              Genre,
              Role,
              ProfilePic,
              Bio,
              Location,
              Terms: value,
            };
            const result = onChange(modelFields);
            value = result?.Terms ?? value;
          }
          if (errors.Terms?.hasError) {
            runValidationTasks("Terms", value);
          }
          setTerms(value);
        }}
        onBlur={() => runValidationTasks("Terms", Terms)}
        errorMessage={errors.Terms?.errorMessage}
        hasError={errors.Terms?.hasError}
        {...getOverrideProps(overrides, "Terms")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
