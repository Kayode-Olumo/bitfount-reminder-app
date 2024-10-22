import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import prisma from "@/lib/prisma";

import React from "react";

const CollectionList = async () => {
  const user = { id: "1234" }; //normally this would take a dynamic value
  const collections = await prisma.collection.findMany({
    where: {
      userId: user?.id,
    },
  });

  if (collections.length === 0) {
    return (
      <Alert>
        <AlertTitle>The are no collections yet!</AlertTitle>
        <AlertDescription>Create a collection to get started</AlertDescription>
      </Alert>
    );
  }

  return <div>CollectionList</div>;
};

export default CollectionList;
