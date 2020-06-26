# Notes

## Creating a secret in Kubernetes

```shell
# kubectl create secret generic jwt-secret --from-literal=JWT_KEY=asdf
# kubectl create secret generic stripe-secret --from-literal=STRIPE_KEY=asdf
```

## Port-Forwarding with Kubectl

```shell
# kubectl port-forward [pod-name] 4222:4222
```

## doctl

Authenticating with Doctl

```shell
# doctl auth init
```

Get connection info for our new cluster

```shell
# doctl kubernetes cluster kubeconfig save <cluster_name>
```

List all contexts

```shell
# kubectl config view
```

Use a different context

```shell
# kubectl config use-context <context_name>
```
