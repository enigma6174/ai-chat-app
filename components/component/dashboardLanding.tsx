"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface PropTypes {
  onSelect: Function;
}

export function DashboardLanding({ onSelect }: PropTypes) {
  return (
    <main className="flex-1 p-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>AI Chat</CardTitle>
            <CardDescription>
              Try out the enhanced querying capabilities.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              className="w-full"
              size="sm"
              onClick={() => onSelect("chat")}
            >
              Start Chat
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Graphs</CardTitle>
            <CardDescription>
              Create, explore and manage <strong>knowledge graphs</strong>.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full" size="sm">
              Explore Graphs
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Datasets</CardTitle>
            <CardDescription>
              Explore, view and manage your datasets.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full" size="sm">
              Explore Data
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Models</CardTitle>
            <CardDescription>
              Manage, customize and fine tune your AI models.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full" size="sm">
              Manage Models
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Analytics</CardTitle>
            <CardDescription>
              View logs, track token usage, and monitor activity.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full" size="sm">
              View Logs
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Pipelines</CardTitle>
            <CardDescription>
              Setup, track and manage different pipelines.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full" size="sm">
              Manage Pipelines
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Settings</CardTitle>
            <CardDescription>
              Customize your application settings, API configurations, secret
              tokens etc.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full" size="sm">
              Configure
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
