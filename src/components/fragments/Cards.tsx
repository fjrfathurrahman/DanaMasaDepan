import { motion } from "framer-motion";
import { Card, CardBody, CardFooter, CardHeader, User } from "@nextui-org/react";

interface Review {
  name: string;
  job: string;
  avatar?: string;
  content: string;
  time: string;
}

const CardsReview = ({ index, review }: { index: number; review: Review }) => {
  return (
    <motion.div
      key={index}
      className="min-w-[300px] sm:min-w-[350px] mr-4"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Card classNames={{ base: "p-2" }} radius="lg" shadow="sm" className=" dark:bg-darkSecondary max-w-[400px] min-h-[270px]">
        <CardHeader className="flex gap-4 items-center">
          <User name={review.name} description={review.job} 
            avatarProps={{
              src: review.avatar,
            }}
          />
        </CardHeader>
        <CardBody>
          <p>{review.content}</p>
        </CardBody>
        <CardFooter>
          <p className="text-sm text-end">{review.time}</p>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const Render = { CardsReview };
export default Render;
