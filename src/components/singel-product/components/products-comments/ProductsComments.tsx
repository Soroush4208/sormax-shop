import Loading from "@/components/shared/loading/Loading";
import AddComment from "@/components/singel-product/components/products-comments/add-comment/AddComment";
import { useGetAllComments } from "@/components/singel-product/hooks/index";
import { Box, Button, Grid, Rating, Typography } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function ProductsComments() {
  const { data: comments, isLoading, isError, error } = useGetAllComments();
  const { t } = useTranslation();
  const [visibleComments, setVisibleComments] = useState(4);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Box>Error : {error.message}</Box>;
  }

  const handleLoadMore = () => {
    setVisibleComments((prev) => prev + 4);
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, my: 7 }}>
        <Box sx={{ width: "20px", height: "30px", bgcolor: "black" }} />
        <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
          {t("products.comments")}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          gap: 2,
        }}
      >
        <AddComment />
        <Box sx={{ flex: 1 }}>
          <Box>
            <Grid container spacing={2} sx={{ direction: "ltr" }}>
              {comments?.slice(0, visibleComments).map((comment) => (
                <Grid item xs={12} key={comment.id}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      p: 3,
                      border: "1px solid #e0e0e0",
                      borderRadius: "10px",
                      mb: 1,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                        }}
                      >
                        <Box
                          component="img"
                          src={comment.avatar}
                          alt={comment.name}
                          sx={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "50%",
                            border: "1px solid",
                          }}
                        />
                        <Typography
                          sx={{ fontSize: "20px", fontWeight: "bold" }}
                        >
                          {comment.name}
                        </Typography>
                      </Box>
                      <Rating
                        name={`rating-${comment.id}`}
                        value={comment.rating as unknown as number}
                        max={5}
                        readOnly
                      />
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "18px",
                        mt: 1,
                        ml: 7.2,
                        textAlign: "justify",
                      }}
                    >
                      {comment.comment}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
            {visibleComments < (comments?.length || 0) && (
              <Button variant="text" sx={{ mt: 2 }} onClick={handleLoadMore}>
                {t("products.loadMore")}
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ProductsComments;
