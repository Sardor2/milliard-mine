import api from "./api";
import { useEffect, useState } from "react";

const fetchProjects = (page = 1) => {
  return api.get(`images?page=${page}&per_page=6`);
};

const useProjects = () => {
  const [projects, setProjects] = useState({});
  const [loading, setLoading] = useState(true);
  const [isLoadingNextPage, setLoadingNextPage] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchProjects(page).then((data) => {
      setProjects(data);
      setLoading(false);
    });
  }, []);

  const fetchMore = () => {
    if (page < projects?.links?.last_page) {
      setPage(page + 1);
      setLoadingNextPage(true);
      fetchProjects(page + 1)
        .then((res) => {
          setProjects((prev) => ({
            ...prev,
            data: [...prev.data, ...res.data],
          }));
        })
        .finally(() => setLoadingNextPage(false));
      setPage(page + 1);
    }
  };

  return {
    loading,
    projects: projects.data,
    hasMore: page < projects?.links?.last_page,
    fetchMore,
    isLoadingNextPage,
  };
};

export default useProjects;
