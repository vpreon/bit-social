import { Box, Spinner, Text } from '@chakra-ui/react';
import { ReactNode, useState, useRef, useCallback } from 'react';

export type Fn = () => any;
export type infinite = (loaded: Fn, noMore: Fn) => any;
type Props = {
  children: ReactNode;
  infinite?: infinite;
  noMore?: ReactNode;
  loader?: ReactNode;
};

export const AppInfiniteScroll = (props: Props) => {
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const observer = useRef<IntersectionObserver>();

  const lastElementRef = useCallback(
    (node: HTMLElement | null) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          if (props.infinite) {
            setLoading(true);
            const loaded = () => setLoading(false);
            const noMore = () => setHasMore(false);
            props.infinite(loaded, noMore);
          }
        }
      });
      if (node) observer.current.observe(node);
    },

    [loading, hasMore, props]
  );

  return (
    <Box>
      {props.children}
      {hasMore ? (
        <Box m="15px 15px" ref={lastElementRef}>
          --
          {loading && props.loader}
        </Box>
      ) : (
        props.noMore
      )}
    </Box>
  );
};

AppInfiniteScroll.defaultProps = {
  noMore: <Text p="10px 0"> -- no more --</Text>,
  loader: <Spinner />,
};
