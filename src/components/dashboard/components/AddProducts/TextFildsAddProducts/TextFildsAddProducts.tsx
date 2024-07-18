// import { useGetAllCategoryToDashboard } from "@/components/dashboard/hooks";
// import { useStoreSelectCategory } from "@/store/useStore";
// import { IProduct } from "@/types/types";
// import { FormControl, Grid, MenuItem, Select, TextField } from "@mui/material";
// import { useForm } from "react-hook-form";
// import { useTranslation } from "react-i18next";

// function TextFieldsAddProducts() {
//   const { data: categories, isLoading, error } = useGetAllCategoryToDashboard();
  
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm<IProduct>();

//   const { t } = useTranslation();

//   function onSubmit(data: IProduct) {
//     // Handle form submission
//     console.log("Form Data:", data);
//   }

//   const handleChange = (event: { target: { value: any } }) => {
//     setSelectedCategory(event.target.value);
//   };

//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>Error loading categories</p>;

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <Grid container spacing={2}>
//         <Grid item xs={12} md={6}>
//           <FormControl variant="standard" sx={{ border: "none" }} fullWidth>
//             <Select
//               value={selectedCategory}
//               onChange={handleChange}
//               inputProps={{
//                 name: "Category",
//                 id: "uncontrolled-native",
//               }}
//               sx={{
//                 color: "inherit",
//                 border: "none",
//                 "& .MuiSelect-select": {
//                   border: "none",
//                   outline: "none",
//                 },
//                 "&:before, &:after": {
//                   border: "none",
//                 },
//               }}
//             >
//               {categories.map((category) => (
//                 <MenuItem key={category.id} value={category.id}>
//                   {category.name}
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//         </Grid>

//         <Grid item xs={12} md={6}>
//           <TextField
//             fullWidth
//             label={t("sign_up.userprice")}
//             variant="outlined"
//             {...register("price", {
//               required: t("sign_up.error.userprice"),
//             })}
//             error={!!errors.price}
//             helperText={errors.price?.message?.toString()}
//           />
//         </Grid>

//         <Grid item xs={12} md={6}>
//           <TextField
//             fullWidth
//             label={t("sign_up.username")}
//             variant="outlined"
//             {...register("name", {
//               required: t("sign_up.error.username"),
//             })}
//             error={!!errors.name}
//             helperText={errors.name?.message?.toString()}
//           />
//         </Grid>

//         <Grid item xs={12} md={6}>
//           <TextField
//             fullWidth
//             label={t("sign_up.userquantity")}
//             variant="outlined"
//             {...register("quantity", {
//               required: t("sign_up.error.userquantity"),
//             })}
//             error={!!errors.quantity}
//             helperText={errors.quantity?.message?.toString()}
//           />
//         </Grid>

//         <Grid item xs={12} md={6}>
//           <TextField
//             fullWidth
//             label={t("sign_up.userbrand")}
//             variant="outlined"
//             {...register("brand", {
//               required: t("sign_up.error.userbrand"),
//             })}
//             error={!!errors.brand}
//             helperText={errors.brand?.message?.toString()}
//           />
//         </Grid>

//         <Grid item xs={12} md={6}>
//           <TextField
//             fullWidth
//             label={t("sign_up.userdescription")}
//             variant="outlined"
//             {...register("description", {
//               required: t("sign_up.error.userdescription"),
//             })}
//             error={!!errors.description}
//             helperText={errors.description?.message?.toString()}
//           />
//         </Grid>

//         <Grid item xs={12} md={6}>
//           <TextField
//             fullWidth
//             label={t("sign_up.userdate")}
//             variant="outlined"
//             {...register("createdAt", {
//               required: t("sign_up.error.userdate"),
//             })}
//             error={!!errors.createdAt}
//             helperText={errors.createdAt?.message?.toString()}
//           />
//         </Grid>

//         <Grid item xs={12} md={6}>
//           <button type="submit">{t("sign_up.submit")}</button>
//         </Grid>
//       </Grid>
//     </form>
//   );
// }

// export default TextFieldsAddProducts;
