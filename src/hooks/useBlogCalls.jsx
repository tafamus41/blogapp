import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  getSingleBlogSuccess,
  getCommentsSuccess,
  getLikesSuccess,
  getCategorySuccess,
  getBlogSuccess,
  fetchStart,
  fetchFail,
} from "../features/blogSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useNavigate } from "react-router";

const useBlogCalls = () => {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const getBlogs = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios(`${process.env.REACT_APP_BASE_URL}blogs/`, {
        headers: { Authorization: `Token ${token}` },
      });
      dispatch(getBlogSuccess({ data: data.data }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const getBlogsDraft = async (id) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios(
        `${process.env.REACT_APP_BASE_URL}blogs/?author=${id}`,
        {
          headers: { Authorization: `Token ${token}` },
        }
      );
      dispatch(getBlogSuccess({ data: data.data }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const getCategories = async () => {
    try {
      const { data } = await axios(
        `${process.env.REACT_APP_BASE_URL}categories/`,
        {
          headers: { Authorization: `Token ${token}` },
        }
      );
      dispatch(getCategorySuccess({ data: data.data }));
    } catch (error) {
      console.log(error);
    }
  };

  //!BLOG
  const postBlog = async (data) => {
    try {
      await axios.post(`${process.env.REACT_APP_BASE_URL}blogs/`, data, {
        headers: { Authorization: `Token ${token}` },
      });
      toastSuccessNotify(`Veri ekleme başarılı.`);
      navigate("/");
      getBlogs();
    } catch (error) {
      toastErrorNotify("Ekleme işlemi başarısız oldu.");
    }
  };

  const updateBlog = async (id, data) => {
    try {
      await axios.put(`${process.env.REACT_APP_BASE_URL}blogs/${id}`, data, {
        headers: { Authorization: `Token ${token}` },
      });
      toastSuccessNotify(`Veri ekleme başarılı.`);
      navigate(`/detail/${id}`);
      getSingleBlog(id);
    } catch (error) {
      toastErrorNotify("Ekleme işlemi başarısız oldu.");
    }
  };
  const deleteBlog = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_BASE_URL}blogs/${id}`, {
        headers: { Authorization: `Token ${token}` },
      });
      toastSuccessNotify(`Silme işlemi başarılı`);
      navigate(`/myblogs`);
    } catch (error) {
      toastErrorNotify("Silme işlemi başarısız oldu.");
    }
  };

  const getSingleBlog = async (id) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios(
        `${process.env.REACT_APP_BASE_URL}blogs/${id}`,
        {
          headers: { Authorization: `Token ${token}` },
        }
      );
      dispatch(getSingleBlogSuccess({ data: data.data }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  //!COMMENT
  const getComments = async () => {
    try {
      const { data } = await axios(
        `${process.env.REACT_APP_BASE_URL}comments/`,
        {
          headers: { Authorization: `Token ${token}` },
        }
      );
      dispatch(getCommentsSuccess({ data: data.data }));
    } catch (error) {
      console.log(error);
    }
  };
  const postComments = async (id, value) => {
    try {
      await axios.post(
        `${process.env.REACT_APP_BASE_URL}comments/`,
        {
          blogId: id,
          comment: value,
        },
        {
          headers: { Authorization: `Token ${token}` },
        }
      );
      toastSuccessNotify("Yorumunuz başarıyla eklendi.");
      getSingleBlog(id);
    } catch (error) {
      console.log(error);
      toastErrorNotify("Yorumunuz eklenemedi.");
    }
  };

  //!LİKE
  const getLikes = async (id) => {
    try {
      const { data } = await axios(
        `${process.env.REACT_APP_BASE_URL}blogs/${id}/getLike`,

        {
          headers: { Authorization: `Token ${token}` },
        }
      );
      dispatch(getLikesSuccess({ data: data }));
    } catch (error) {
      console.log(error);
    }
  };

  const postLike = async (id) => {
    try {
      await axios.post(
        `${process.env.REACT_APP_BASE_URL}blogs/${id}/postLike`,
        {},
        {
          headers: { Authorization: `Token ${token}` },
        }
      );
      getLikes(id);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getBlogs,
    getSingleBlog,
    getComments,
    postComments,
    getLikes,
    postLike,
    getCategories,
    postBlog,
    getBlogsDraft,
    updateBlog,
    deleteBlog,
  };
};

export default useBlogCalls;
