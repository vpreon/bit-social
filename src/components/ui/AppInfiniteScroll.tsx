import { Spinner } from '@chakra-ui/react';
import { useIntersection } from '@mantine/hooks';
import { useEffect, ReactNode, useState } from 'react';

export type Fn = () => any;
export type infinite = (loaded: Fn, noMore: Fn) => any;
type Props = {
  children: ReactNode;
  infinite?: infinite;
  ready?: boolean;
};

export const AppInfiniteScroll = (props: Props) => {
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const { ref, entry } = useIntersection({
    threshold: 0.5,
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
    <div>
      {props.children}
      {hasMore ? (
        <div ref={ref}>
          <Spinner />
        </div>
      ) : (
        <span>No More</span>
      )}
    </div>
  );
};
