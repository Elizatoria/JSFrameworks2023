//import { useState, useEffect } from "react";
import axios from "axios";
// Import something here
import useSWR from "swr";

function CatFact() {
  /**
   * You will not need state store the fact in state anymore after refactoring App.jsx to use Suspense.
   */
  //const [fact, setFact] = useState("");
  // const fetcher = (...args) => axios(...args).then((res) => res.data.fact);
  const fetcher = (url: string) => axios(url).then((res) => res.data.fact);

  /**
   * You will display loading symbols and handle errors in the "App.jsx" component instead
   */
  // const [isLoading, setIsLoading] = useState(true);
  // const [hasError, setHasError] = useState(false);

  /**
   * You will replace useEffect.
   * First, turn the axios function into a "fetcher" function.
   * Second, refactor to use the "useSWR" hook.
   * Instead of setting the fact in state, you will want to return the fact.
   */
  // useEffect(() => {
  //   axios("https://catfact.ninja/fact")
  //     .then((res) => {
  //       setFact(res.data.fact);
  //       setIsLoading(false);
  //     })
  //     // Will this catch block be needed anymore?
  //     .catch((err) => {
  //       console.error(err);
  //       setHasError(true);
  //       setIsLoading(false);
  //     });
  // }, []);
  const { data } = useSWR("https://catfact.ninja/fact", fetcher, {
    suspense: true,
    revalidateOnFocus: false,
    revalidateOnMount: false,
    revalidateOnReconnect: false,
    refreshInterval: 0,
  });

  /**
   * You will display loading symbols and handle errors in the "App.jsx" component instead
   */
  // if (isLoading) return <div className="message">Loading ...</div>;
  // if (hasError)
  //   return <div className="message">Sorry, an unexpected error occurred.</div>;

  /**
   * You may need to change something here
   */
  //return <blockquote>{fact}</blockquote>;
  return <blockquote>{data}</blockquote>;
}

export default CatFact;
