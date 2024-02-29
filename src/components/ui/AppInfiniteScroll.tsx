import { Box, Spinner, Text } from '@chakra-ui/react';
import { useIntersection } from '@mantine/hooks';
import { useEffect, ReactNode, useState } from 'react';

export type Fn = () => any;
export type infinite = (loaded: Fn, noMore: Fn) => any;
type Props = {
  children: ReactNode;
  infinite?: infinite;
  ready?: boolean;
  noMore?: ReactNode;
  loader?: ReactNode;
};

export const AppInfiniteScroll = (props: Props) => {
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const { ref, entry } = useIntersection({
    threshold: 1,
  });

  useEffect(() => {
    if (entry?.isIntersecting && !loading && props.ready) {
      if (props.infinite) {
        setLoading(true);
        const loaded = () => setLoading(false);
        const noMore = () => setHasMore(false);
        props.infinite(loaded, noMore);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entry]);

  return (
    <Box>
      {props.children}
      {hasMore ? (
        <Box m="15px 0" ref={ref}>
          {props.loader}
        </Box>
      ) : (
        props.noMore
      )}
    </Box>
  );
};

AppInfiniteScroll.defaultProps = {
  ready: true,
  noMore: <Text p="10px 0"> -- no more --</Text>,
  loader: <Spinner />,
};
